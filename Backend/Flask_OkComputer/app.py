from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import model
import os

app = Flask(__name__, static_folder='build', static_url_path='/')

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

            return (recommended_jobs)

        return jsonify({'error': 'No file uploaded'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
