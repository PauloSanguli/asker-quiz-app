from os import system
from typer import Typer



app = Typer()

@app.command(name='runserver')
def runserver(host: int) -> None:

    str_statement = f"python -m http.server {host}"

    system(str_statement)


@app.command(name='infoserver')
def infoserver() -> None:

    print(":::: server asker host default: #### ::::")
    print(":::: for run - python server.py server #### ::::")



if __name__ == '__main__':
    app()
