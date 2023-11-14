import pymysql

class handleruserRegistration():
    def __init__(self):
        self.__mysqlconnect()

    def __mysqlconnect(self) -> None:
        try:
            self.dbconnection = pymysql.connect(
                host='localhost',
                user='root',
                database='asker'
            )
            self.cursor = self.dbconnection.cursor()
        except Exception as error:
            print(f"Error to connect: {error}")
        else:
            print("Database was connected!")
    def insertLevel(self, asks, category):
        try:
            for round in range(0, len(asks)):
                self.cursor.execute(f'''INSERT INTO {category} VALUES (%s,%s,%s,%s,%s,%s,%s)''', (asks[round]))
                print(asks[round])
        except Exception as error:
            print(f"Error to insert: {error}")
            return False
        else:
            print("Datas was inserted!")
            self.dbconnection.commit()
            return True

asks = [
    (
        "Considere que A=3, B=6, C=18, D=72. Qual será o valor de E?",
        "360",
        "54",
        "1296",
        "72",
        "a",
        3
    ),
    (
        "Hoje é quarta, a 5 dias atrás era sexta, daqui a 3 dias será sabado, que dia será daqui a 28 dias?",
        "Quinta",
        "Domingo",
        "Quarta",
        "Sexta",
        "c",
        3
    ),
    (
        "Chamam-me de exata pois gosto de simplificar, poucos gostam de mim pois dou problemas e sem soluções. O que sou?",
        "Matemática",
        "Ciência",
        "Crise",
        "Algoritmo",
        "a",
        3
    ),
    (
        "Considere que 7x7x2x7 = 14, 6x3x6 = 3, 2x5x3x2x2 = 30. Qual será o resultado de 10x(20-15)x5x10x(6-3)x5x8x(15-7)",
        "15",
        "120",
        "10",
        "0",
        "a",
        3
    ),
]

Ihandler = handleruserRegistration()
response = Ihandler.insertLevel(asks, 'logic')
#print(response)
