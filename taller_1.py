
class TallerArrays:

    def __init__(self):

        self.lista1 = ["Rojo", "Azul", "Verde", "Amarillo", "Negro"]

        self.lista2 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]

    def acceder(self):
        print("Segundo elemento:", self.lista1[1])
        print("Elemento [1][1]:", self.lista2[1][1])


    def insertar(self):
        self.lista1.insert(2, "Estructura de datos")
        print("Lista después de insertar:", self.lista1)

    def eliminar(self):
        del self.lista2[2][2]
        print("Matriz después de eliminar:", self.lista2)


    def buscar(self):
        indice1 = self.lista1.index("Estructura de datos")
        print("Índice en lista1:", indice1)

        valor = 5
        indice2 = self.lista2[1].index(valor)
        print("Índice del valor 5 en segunda fila:", indice2)



obj = TallerArrays()

obj.acceder()
obj.insertar()
obj.eliminar()
obj.buscar()
