from ..models.getdatas import handlerInterfaceuser
import pymysql



class handlerUser():
    def __init__(self):
        self.__mysqlconnect_user()

    def __mysqlconnect_user(self):
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

    
    def selectdatas_user(self, id: int) -> any:
        try:
            SQL_query, SQL_args = "SELECT * FROM `customer_user` WHERE `id` = %s", (id)

            self.cursor.execute(SQL_query, SQL_args)
        except Exception as error:
            print(f"Error selecting: {error}")

            return (), False
        else:
            print("Datas selected!")

            datas = self.cursor.fetchone()

            self.dbconnection.commit()
            if datas:

                dic = {
                    "name": datas[1],
                    "id": datas[0],
                    "age": datas[2],
                    "score": datas[3]
                }
                
                return dic, True
            else:
                return (), False

