from ...app import app
from flask import (make_response)
from flask import (jsonify)
from flask import (request)

from ....schema.handlers.getranking import (
    handleranking as Ihandler
)



@app.route("/user/get_ranking/", methods=["get"])
def route_get_ranking() -> any:

    if request.method == "GET":

        dbconnection = Ihandler()
        datas, response = dbconnection.selectdatas()

        return make_response(
            jsonify({
                "datas": datas,
                "response": response
            })
        )
