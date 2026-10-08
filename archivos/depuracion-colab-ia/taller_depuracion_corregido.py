# ============================================================
# TALLER: DEPURACIÓN DE CÓDIGO CON IA EN GOOGLE COLAB
# 10 ejercicios corregidos con ayuda de IA (ChatGPT / Gemini / Copilot)
# ============================================================


# ============================================================
# EJERCICIO 1: Análisis de Datos con Pandas
# ERROR: Intento de leer un archivo CSV que no existe (FileNotFoundError)
# ============================================================
import pandas as pd

try:
    df = pd.read_csv("ventas.csv")
    print(df.head())
except FileNotFoundError:
    print("El archivo 'ventas.csv' no existe. Verifica la ruta o sube el archivo a Colab.")
    # Alternativa: crear datos de ejemplo para poder continuar probando el ejercicio
    df = pd.DataFrame({"producto": ["A", "B", "C"], "ventas": [10, 20, 30]})
    print("Usando datos de ejemplo:")
    print(df.head())


# ============================================================
# EJERCICIO 2: Función Recursiva Incorrecta
# ERROR: Falta una condición de parada (caso base), causa RecursionError
# ============================================================
def factorial(n):
    if n <= 1:          # caso base agregado
        return 1
    return n * factorial(n - 1)

print(factorial(5))     # 120


# ============================================================
# EJERCICIO 3: Gráfico de una Distribución con Matplotlib
# ERROR: Uso incorrecto/incompleto de plt.hist(), no se especifican bins
#        ni se cierra la figura, lo que puede generar un gráfico vacío o mal formado
# ============================================================
import numpy as np
import matplotlib.pyplot as plt

datos = np.random.normal(loc=50, scale=15, size=1000)

plt.figure(figsize=(8, 5))
plt.hist(datos, bins=30, color="steelblue", edgecolor="black")  # bins definido explícitamente
plt.title("Distribución de datos")
plt.xlabel("Valor")
plt.ylabel("Frecuencia")
plt.show()


# ============================================================
# EJERCICIO 4: Web Scraping con BeautifulSoup
# ERROR: La página rechaza requests.get() por no incluir un encabezado User-Agent
# ============================================================
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}  # encabezado agregado

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

print(soup.title.text if soup.title else "No se encontró el título")


# ============================================================
# EJERCICIO 5: Manipulación de Arrays con NumPy
# ERROR: reshape(3,3) requiere 9 elementos, pero arange(10) genera 10 (ValueError)
# ============================================================
array = np.arange(9)          # se ajusta a 9 elementos (3x3 = 9)
matriz = array.reshape(3, 3)
print(matriz)


# ============================================================
# EJERCICIO 6: Uso de Hilos con threading
# ERROR: Falta sincronización (Lock) entre hilos, causando condición de carrera
# ============================================================
import threading

contador = 0
lock = threading.Lock()       # candado agregado para sincronizar el acceso

def incrementar():
    global contador
    for _ in range(1000):
        with lock:             # sección crítica protegida
            contador += 1

t1 = threading.Thread(target=incrementar)
t2 = threading.Thread(target=incrementar)

t1.start()
t2.start()
t1.join()
t2.join()

print("Valor final del contador:", contador)  # siempre 2000


# ============================================================
# EJERCICIO 7: API con requests
# ERROR: No maneja errores HTTP (por ejemplo, si la URL falla o responde con error)
# ============================================================
url_api = "https://jsonplaceholder.typicode.com/posts/1"

try:
    response = requests.get(url_api, timeout=5)
    response.raise_for_status()  # lanza excepción si el código HTTP indica error
    print(response.json())
except requests.exceptions.RequestException as e:
    print(f"Error al consultar la API: {e}")


# ============================================================
# EJERCICIO 8: Clase con Herencia en Python
# ERROR: Perro.__init__ no llama a Animal.__init__, por lo que 'nombre' nunca se asigna
# ============================================================
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)  # se inicializa la clase base
        self.raza = raza

    def ladrar(self):
        print(f"{self.nombre} está ladrando.")

mi_perro = Perro("Firulais", "Labrador")
mi_perro.ladrar()


# ============================================================
# EJERCICIO 9: Conexión a Base de Datos SQLite
# ERROR: Falta la confirmación de cambios (commit())
# ============================================================
import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nombre TEXT)")
cursor.execute("INSERT INTO usuarios (nombre) VALUES ('Juan')")

conn.commit()      # confirmación de cambios agregada
conn.close()


# ============================================================
# EJERCICIO 10: Algoritmo de Ordenamiento (Bubble Sort)
# ERROR: El rango interno no se reduce con cada pasada externa, lo que hace el
#        algoritmo ineficiente (recorre comparaciones ya ordenadas innecesariamente)
# ============================================================
def bubble_sort(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n - i - 1):   # el rango se reduce en cada pasada
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]

numeros = [5, 3, 8, 1, 2]
bubble_sort(numeros)
print(numeros)   # [1, 2, 3, 5, 8]
