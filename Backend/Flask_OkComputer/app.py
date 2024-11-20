from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from logging import FileHandler, WARNING
import model
import os
import json
import math

app = Flask(__name__, static_folder='build', static_url_path='/')
file_handler = FileHandler('errorlog.txt')
file_handler.setLevel(WARNING)
CORS(app)

# Route to serve React's index.html
@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Define /predict route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        job_title = request.form.get('job_title', '')
        location = request.form.get('location', '')
        num_outputs = int(request.form.get('num_outputs', 300))

        file = request.files['file']
        if file:
            # Save the uploaded file to the uploads folder
            filename = file.filename
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)

            # Example ML model processing (replace with your actual function)
            recommended_jobs = model.main(filepath=file_path, job_title=job_title, job_location=location, num_outputs=num_outputs)

            # Function to sanitize NaN and Infinity values
            def sanitize_json(data):
                if isinstance(data, dict):
                    return {k: sanitize_json(v) for k, v in data.items()}
                elif isinstance(data, list):
                    return [sanitize_json(item) for item in data]
                elif isinstance(data, float) and (math.isnan(data) or math.isinf(data)):
                    return None  # Replace NaN/Infinity with None or a default value
                return data

            # Sanitize the model's output
            sanitized_jobs = sanitize_json(recommended_jobs)

            # Convert sanitized data to a JSON-compatible string if needed
            json_result = json.dumps(sanitized_jobs)

            # Parse the string back to a dictionary (if it's a JSON string) and return the result
            result_dict = json.loads(json_result)  # This ensures the data is a Python dictionary
            print(type(result_dict))
            # Return the sanitized JSON response using jsonify
            return jsonify(result_dict)

        return jsonify({'error': 'No file uploaded'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)

