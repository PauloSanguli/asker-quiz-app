import pymysql
from ..models.getasks import handlerInterface



class handlerAsks():
    def __init__(self):
        self.__mysqlconnect()


    def __mysqlconnect(self):
        try:
            self.dbconnection = pymysql.connect(
                host='localhost',
                user='root',
                database='asker'
            ) 
            self.cursor = self.dbconnection.cursor()
        except Exception as error:
            print(f"Error connecting: {error}")
        else:
            print("Database was connected")


    def selectdatas(self, category: str, level: int) -> any:
        try:
            SQL_query, SQL_args = f"SELECT * FROM {category} WHERE `level` = %s", (level)

            self.cursor.execute(SQL_query, SQL_args)
        except Exception as error:

            print(f"Error selecting datas: {error}")
            return (), False
        else:
            print("Datas was selected!")

            datas = self.cursor.fetchall()

            self.dbconnection.commit()

            if datas:
                return datas, True
            else:
                return (), False
            