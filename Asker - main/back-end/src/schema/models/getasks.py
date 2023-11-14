from abc import abstractmethod, ABC

class handlerInterface(ABC):

    @abstractmethod
    def __mysqlconnect():
        raise NotImplementedError("Implement the method mysqlconnect!")

    @abstractmethod
    def selectDatas():
        raise NotImplementedError("Implement the method selectDatas!")

    