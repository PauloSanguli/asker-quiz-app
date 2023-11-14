from ...app import app
from flask import (jsonify)
from flask import (request)
from flask import (make_response)

from ....schema.handlers.registration import (
    handleruserRegistration as Ihandler
)



@app.route("/user/registration/<name>/<int:age>/", methods=["get"])
def route_registration(name, age: int) -> any:
    if request.method == "GET":

        db = Ihandler()

        response = db.insertdatas(name, age)

        return make_response(
            jsonify({
                "response": response
            })
        )