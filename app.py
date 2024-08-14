import joblib
from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def index():
    data = request.json
    print(data)
    with open('emotion.pkl', 'rb') as f:
        model = joblib.load(f)
        
    pred = model.predict([data])
    print(pred[0])
    
    return jsonify({'emotion': pred[0]})


if __name__ == '__main__':
    app.run(debug=True)
    
    