# ============================================================
# TALLER: OPERADORES MATEMÁTICOS EN PYTHON
# Objetivo: aplicar los operadores matemáticos en Python mediante
# ejercicios prácticos para reforzar su comprensión y uso.
# ============================================================


# ============================================================
# 1. OPERADORES ARITMÉTICOS
# ============================================================

# Ejercicio 1: suma, resta, multiplicación, división y módulo de dos números
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
print(f"Suma: {num1 + num2}")
print(f"Resta: {num1 - num2}")
print(f"Multiplicación: {num1 * num2}")
print(f"División: {num1 / num2}")
print(f"Módulo: {num1 % num2}")

# Ejercicio 2: cuadrado y cubo de un número
numero = float(input("Ingresa un número: "))
print(f"Cuadrado: {numero ** 2}")
print(f"Cubo: {numero ** 3}")

# Ejercicio 3: convertir minutos a horas y minutos
minutos_totales = int(input("Ingresa una cantidad de minutos: "))
horas = minutos_totales // 60
minutos_restantes = minutos_totales % 60
print(f"{minutos_totales} minutos equivalen a {horas} horas y {minutos_restantes} minutos")

# Ejercicio 4: determinar si un número es par o impar
numero = int(input("Ingresa un número entero: "))
if numero % 2 == 0:
    print(f"{numero} es par")
else:
    print(f"{numero} es impar")

# Ejercicio 5: área y perímetro de un rectángulo
base = float(input("Ingresa la base del rectángulo: "))
altura = float(input("Ingresa la altura del rectángulo: "))
area = base * altura
perimetro = 2 * (base + altura)
print(f"Área: {area}")
print(f"Perímetro: {perimetro}")


# ============================================================
# 2. OPERADORES DE ASIGNACIÓN
# ============================================================

# Ejercicio 1: variable inicial 100 modificada con operadores de asignación
valor = 100
print(f"Valor inicial: {valor}")
valor += 20
print(f"Después de += 20: {valor}")
valor -= 30
print(f"Después de -= 30: {valor}")
valor *= 2
print(f"Después de *= 2: {valor}")
valor /= 4
print(f"Después de /= 4: {valor}")

# Ejercicio 2: restar 5 a un número ingresado usando operador de asignación
numero = float(input("Ingresa un número: "))
numero -= 5
print(f"El número menos 5 es: {numero}")

# Ejercicio 3: doble y mitad de un número usando operadores de asignación
numero = float(input("Ingresa un número: "))
doble = numero
doble *= 2
mitad = numero
mitad /= 2
print(f"El doble es: {doble}")
print(f"La mitad es: {mitad}")

# Ejercicio 4: incrementar una variable en 3, cinco veces
contador = 0
for i in range(5):
    contador += 3
    print(f"Incremento {i + 1}: contador = {contador}")

# Ejercicio 5: conversión de dólares a pesos con operador de asignación
TASA_CAMBIO = 4000  # pesos colombianos por dólar (valor de referencia)
dolares = float(input("Ingresa una cantidad en dólares: "))
pesos = dolares
pesos *= TASA_CAMBIO
print(f"{dolares} USD equivalen a {pesos} COP")


# ============================================================
# 3. OPERADORES DE COMPARACIÓN
# ============================================================

# Ejercicio 1: comparar dos números
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
if num1 == num2:
    print("Los números son iguales")
elif num1 > num2:
    print(f"{num1} es mayor que {num2}")
else:
    print(f"{num2} es mayor que {num1}")

# Ejercicio 2: número mayor o menor que 50
numero = float(input("Ingresa un número: "))
if numero > 50:
    print(f"{numero} es mayor que 50")
else:
    print(f"{numero} es menor o igual a 50")

# Ejercicio 3: verificar si la suma de dos números es mayor que 100
num1 = float(input("Ingresa el primer número: "))
num2 = float(input("Ingresa el segundo número: "))
suma = num1 + num2
print(f"La suma es mayor que 100: {suma > 100}")

# Ejercicio 4: comparar dos cadenas de texto
texto1 = input("Ingresa la primera palabra: ")
texto2 = input("Ingresa la segunda palabra: ")
print(f"Las palabras son iguales: {texto1 == texto2}")

# Ejercicio 5: determinar si un número está entre 10 y 20
numero = float(input("Ingresa un número: "))
print(f"El número está entre 10 y 20: {10 <= numero <= 20}")


# ============================================================
# 4. OPERADORES LÓGICOS
# ============================================================

# Ejercicio 1: número positivo y menor que 100
numero = float(input("Ingresa un número: "))
if numero > 0 and numero < 100:
    print(f"{numero} es positivo y menor que 100")
else:
    print(f"{numero} no cumple la condición")

# Ejercicio 2: determinar si una persona puede votar (mayor de 18 y menor de 100)
edad = int(input("Ingresa la edad: "))
if edad >= 18 and edad < 100:
    print("Puede votar")
else:
    print("No puede votar")

# Ejercicio 3: apto para descuento (menor de 12 o mayor de 60)
edad = int(input("Ingresa la edad: "))
if edad < 12 or edad > 60:
    print("Es apto para el descuento")
else:
    print("No es apto para el descuento")

# Ejercicio 4: verificar que un número no sea negativo
numero = float(input("Ingresa un número: "))
if not numero < 0:
    print(f"{numero} no es negativo")
else:
    print(f"{numero} es negativo")

# Ejercicio 5: acceso a zona restringida según rol y contraseña
rol = input("Ingresa el rol (admin/usuario): ")
contrasena = input("Ingresa la contraseña: ")
if rol == "admin" and contrasena == "1234":
    print("Acceso concedido a la zona restringida")
else:
    print("Acceso denegado")


# ============================================================
# 5. OPERADORES DE IDENTIDAD
# ============================================================

# Ejercicio 1: dos listas con los mismos elementos, ¿son el mismo objeto?
lista1 = [1, 2, 3]
lista2 = [1, 2, 3]
print(f"lista1 is lista2: {lista1 is lista2}")   # False: son objetos distintos en memoria
print(f"lista1 == lista2: {lista1 == lista2}")   # True: tienen el mismo contenido

# Ejercicio 2: dos enteros con el mismo valor, ¿son el mismo objeto?
a = 500
b = 500
print(f"a is b: {a is b}")     # Puede dar False: 500 está fuera del rango de enteros que Python cachea
print(f"a == b: {a == b}")     # True

# Ejercicio 3: dos cadenas con el mismo contenido, ¿son el mismo objeto?
texto1 = "compiladores"
texto2 = "compiladores"
print(f"texto1 is texto2: {texto1 is texto2}")   # Python suele reutilizar cadenas cortas (interning)
print(f"texto1 == texto2: {texto1 == texto2}")

# Ejercicio 4: usar 'is' con dos objetos booleanos
bool1 = True
bool2 = True
print(f"bool1 is bool2: {bool1 is bool2}")   # True: los booleanos son objetos únicos en Python

# Ejercicio 5: dos diccionarios con los mismos valores, comparar identidad
dic1 = {"nombre": "Ana", "edad": 20}
dic2 = {"nombre": "Ana", "edad": 20}
print(f"dic1 is dic2: {dic1 is dic2}")   # False: son objetos distintos
print(f"dic1 == dic2: {dic1 == dic2}")   # True: mismo contenido


# ============================================================
# 6. OPERADORES DE PERTENENCIA
# ============================================================

# Ejercicio 1: verificar si un número está en una lista predefinida
numeros_validos = [3, 7, 12, 18, 25]
numero = int(input("Ingresa un número: "))
print(f"{numero} está en la lista: {numero in numeros_validos}")

# Ejercicio 2: verificar si una letra está en una palabra
palabra = "compilador"
letra = input("Ingresa una letra: ")
print(f"'{letra}' está en '{palabra}': {letra in palabra}")

# Ejercicio 3: comprobar si una palabra está en una lista de palabras
palabras = ["python", "java", "javascript", "c++"]
palabra_usuario = input("Ingresa un lenguaje de programación: ")
print(f"'{palabra_usuario}' está en la lista: {palabra_usuario in palabras}")

# Ejercicio 4: usar 'not in' para verificar que un número no esté en un rango
rango = range(1, 11)  # 1 a 10
numero = int(input("Ingresa un número: "))
print(f"{numero} no está entre 1 y 10: {numero not in rango}")

# Ejercicio 5: validar si un usuario existe en una lista de nombres registrados
usuarios_registrados = ["Maycol", "Carlos", "Ana", "Laura"]
nombre = input("Ingresa tu nombre: ")
if nombre in usuarios_registrados:
    print(f"Bienvenido, {nombre}. Usuario registrado.")
else:
    print(f"{nombre} no está registrado.")
