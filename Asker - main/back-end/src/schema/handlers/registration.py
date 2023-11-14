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

    def insertdatas(self, name: str, age: int) -> any:
        try:
            SQL_query, SQL_args = 'INSERT INTO `customer_user`(`customer_name`, `customer_age`) VALUES(%s,%s)', (name, age)
            
            self.cursor.execute(SQL_query, SQL_args)
        except Exception as error:
            print(f"Error to insert: {error}")

            return False
        else:
            print("Datas was inserted!")

            self.dbconnection.commit()

            return True