from ...app import app
from flask import (request)
from flask import (jsonify)
from flask import (make_response)
from ....schema.handlers.getdatas import handlerUser



@app.route("/user/get_datas/<int:id>", methods=["get"])
def route_getdatas_user(id: int) -> any:
    if request.method == "GET":

        dbconnection = handlerUser()
        datas, response = dbconnection.selectdatas_user(id)

        return make_response(
            jsonify({
                "datas": datas,
                "response": response
            })
        )
