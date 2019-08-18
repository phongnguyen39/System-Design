class ParkingLot:
    def __init__(self, type, payment):
        self.type = type
        self.spots = {'sm': 25, 'med':40, 'lg': 30, 'x-lg':5}
        self.payment = payment

shoppingParking = ParkingLot('shopping mall', True)

print(shoppingParking.type)

class Vehicle:
    def __init__(self, licensePlate,color, size):
        self.licensePlate = licensePlate
        self.color = color
        self.size = size

ferrari =  Vehicle('2fast2furious', 'red', 'med')
honda =  Vehicle('GroceryGetta', 'silver', 'med')
harley =  Vehicle('Vroom', 'black', 'sm')
schoolBus =  Vehicle('Schoolin', 'yellow', 'x-lg')
ford =  Vehicle('Haulin', 'white', 'lg')

print(ferrari.licensePlate,honda.licensePlate, harley.licensePlate)