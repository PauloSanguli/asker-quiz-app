from flask import (Flask, jsonify)
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/", methods=["get"])
def response_api():

    return jsonify({
        "api dev":"asker app",
        "status api": "api on air",
        "default host api":"2323"
    })
