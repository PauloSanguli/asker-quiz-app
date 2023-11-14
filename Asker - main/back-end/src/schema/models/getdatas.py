from abc import abstractmethod, ABC

class handlerInterfaceuser(ABC):

    @abstractmethod
    def __mysqlconnect_user():
        raise NotImplementedError("Implement the method mysqlconnect!")

    @abstractmethod
    def selectdatas_user():
        raise NotImplementedError("Implement the method selectdatas!")