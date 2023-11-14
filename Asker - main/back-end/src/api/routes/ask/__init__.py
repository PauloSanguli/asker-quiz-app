from ...app import app
from flask import (request)
from flask import (jsonify)
from flask import (make_response)
from ....schema.handlers.getasks import handlerAsks as Ihandler
from .strutureResponse import createStruture



@app.route("/app/get_asks/<category>/<int:level>", methods=["get"])
def route_get_asks(category, level: int) -> any:
    if request.method == "GET":

        db = Ihandler()
        levels = list()
        for levelIndex in range(1, level+1):
            datas, response = db.selectdatas(category, levelIndex)
            datas = createStruture(datas)
            levels.append(datas)

        return make_response(
            jsonify({
                "datas": levels,
                "response": response
            })
        )
