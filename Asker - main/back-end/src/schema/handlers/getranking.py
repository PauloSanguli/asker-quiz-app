import pymysql



class handleranking():
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

    
    def selectdatas(self) -> any:
        try:
            SQL_query = 'SELECT `customer_name`, `customer_score` FROM `customer_user` ORDER BY `customer_score` DESC LIMIT 10'
            self.cursor.execute(SQL_query)

            self.datas = self.cursor.fetchall()
        except Exception as error:
            print(f"Error to select: {error}")

            return (), False
        else:
            print("Datas was selected!")

            self.dbconnection.commit()
            if self.datas:
                datas_response = self.create_response()
                return datas_response, True
            else:
                return (), False


    def create_response(self) -> any:
        datas_response = []

        for fetch_user in self.datas:
            datas_response.append({
                "name": fetch_user[0],
                "score": fetch_user[1]
            })

        return datas_response
