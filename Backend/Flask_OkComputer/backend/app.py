from flask import Flask, jsonify, request
from flask_cors import CORS
import model
import os
import shutil
from werkzeug.utils import secure_filename

app=Flask(__name__)
CORS(app)


UPLOAD_FOLDER='uploads'
ALLOWED_EXTENSIONS={'pdf'}

app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/predict', methods=['POST'])

def predict():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file'}), 400
        
        file=request.files['file']

        if file.filename=='':
            return jsonify({'error':'No selected file'}), 400

        if file and allowed_file(file.filename):
            filename=secure_filename(file.filename)
            filepath=os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            data=request.json
            job_title=data.get('job_title','')
            job_location=data.get('job_location', '')
            num_outputs=data.get('num_outputs', 300)

            recommended_jobs=model.main(job_title, job_location, num_outputs, filepath) # Parameter are subject to change

            shutil.remove(filepath) #It removes existing resume file and the folder becomes empty

            return jsonify({'recommended_jobs':recommended_jobs})

        else:

            return jsonify({'error': 'Invalid file type'}), 400

    except Exception as e:
        return jsonify({'error':str(e)})


if __name__=='__main__':
    app.run(debug=True)


