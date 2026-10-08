# CÓDIGO CORREGIDO Y OPTIMIZADO

productos = ["Computador", "Teclado", "Mouse", "Monitor"]
precios = [2500000, 120000, 50000, 800000]
cantidades = [2, 5, 10, 3]

total = 0

print("INFORME DE VENTAS")
print("=================")

'''
ERROR ORIGINAL (sintáctico): "for i in range(len(productos))", no tenía los : puntos al final.
CORRECCIÓN: Se agregaron los : puntos al final de la linea, aunque se hizo un 
CAMBIO (optimización): en vez de recorrer por índice con range(len(...)) y luego
indexar productos[i], precios[i], cantidades[i], se usa zip() para recorrer
las 3 listas al mismo tiempo y asi entregar directamente cada valor.
'''
for producto, precio, cantidad in zip(productos, precios, cantidades):
    subtotal = precio * cantidad
    '''
    ERROR ORIGINAL (sintáctico): "if cantidades[i] > 5" no tenía ':' al final.
    CORRECCIÓN: Se agregaron los : puntos al final de la linea, despues de realizar algunos cambios.
    CAMBIOS OPTIMIZACIÓN: el bloque if/else de 4 líneas se unificó en una sola línea
    usando un operador ternario, sin perder la lógica original.
    '''
    descuento = subtotal * 0.10 if cantidad > 5 else 0

    total_producto = subtotal - descuento
    '''
    OPTIMIZACIÓN: se unificó el estilo de impresión con f-strings en vez
    de usar comas (más legible y consistente con el resto del código).
    '''
    print(f"Producto: {producto}")
    print(f"Cantidad: {cantidad}")
    print(f"Precio: {precio}")
    print(f"Subtotal: {subtotal}")
    print(f"Descuento: {descuento}")
    print(f"Total: {total_producto}")

    total += total_producto  # optimización: += en vez de "total = total + total_producto"

print(f"Total de la venta: {total}")

'''
ERROR ORIGINAL (semántico): "promedio = total / cantidades" dividía un número
entre una LISTA, esto no es una operación valida (TypeError).
CORRECCIÓN: se divide entre sum(cantidades) para obtener el precio promedio por unidad vendida.
'''
promedio = total / sum(cantidades)
print(f"Promedio de venta: {promedio}")

'''
ERROR ORIGINAL (indentación): "print("Venta mayorista")" no tenía sangría
bajo el if y así rompía el bloque condicional.
OPTIMIZACIÓN: if/else de 3 líneas unificado en una sola con ternario.
'''
print("Venta mayorista" if total > 5000000 else "Venta normal")

'''ERROR ORIGINAL (semántico/léxico): la variable se llamaba
"nombre_cliente" aquí pero se usaba mal escrita abajo.'''

nombre_cliente = "Carlos"  

'''ERROR ORIGINAL (léxico): se usaba "nombre_clente" (variable no declarada, pero realmente
estaba mal copiada, por ello no era detectada -> NameError).
CORRECCIÓN: se usa el nombre correcto "nombre_cliente".'''
print(f"Cliente: {nombre_cliente}")

'''ERROR ORIGINAL (léxico/sintáctico): faltaba el paréntesis de cierre ')' en este print.
CORRECCIÓN: se agregó el paréntesis faltante.'''
print("Gracias por su compra")