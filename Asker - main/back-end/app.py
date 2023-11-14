from src.api.routes.ask import app
from src.api.routes.registration import app
from src.api.routes.score import app
from src.api.routes.datas_user import app
from src.api.app import app
from src.api.routes.ranking import app


if __name__ == '__main__':
    app.run(
        port='2323',
        debug=True
    )