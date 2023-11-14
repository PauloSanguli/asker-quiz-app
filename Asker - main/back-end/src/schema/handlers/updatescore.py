import pymysql



class handleruserScore():
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


    def updateScore(self, name, score) -> any:
        try:
            SQL_query, SQL_args = 'UPDATE `customer_user` SET `customer_score` = %s WHERE `customer_name` = %s', (score, name)

            self.cursor.execute(SQL_query, SQL_args)
        except Exception as error:
            print(f"Error to update: {error}")

            return False
        else:
            print("Data was updated!")

            self.dbconnection.commit()

            return True
