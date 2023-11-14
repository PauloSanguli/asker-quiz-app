from ...app import app
from flask import (make_response)
from flask import (jsonify)
from flask import (request)

from ....schema.handlers.updatescore import (
    handleruserScore as Ihandler
)



@app.route("/user/update_score/<name>/<score>", methods=["get"])
def route_get_score(name, score: int) -> any:
    if request.method == "GET":
        dbconnection = Ihandler()
        response = dbconnection.updateScore(name, score)
        return make_response(
            jsonify({
                "response": response
            })
        )
