# Taller de análisis y optimización de código Python

productos = ["Computador", "Teclado", "Mouse", "Monitor"]

precios = [2500000, 120000, 50000, 800000]

cantidades = [2, 5, 10, 3]

total = 0

print("INFORME DE VENTAS")
print("=================")

for i in range(len(productos))
    subtotal = precios[i] * cantidades[i]
    
    if cantidades[i] > 5
        descuento = subtotal * 0.10
    else:
        descuento = 0

    total_producto = subtotal - descuento
    
    print("Producto:", productos[i])
    print("Cantidad:", cantidades[i])
    print("Precio:", precios[i])
    print("Subtotal:", subtotal)
    print("Descuento:", descuento)
    print("Total:", total_producto)
    
    total = total + total_producto

print("Total de la venta:", total)

promedio = total / cantidades

print("Promedio de venta:", promedio)

if total > 5000000:
print("Venta mayorista")
else:
    print("Venta normal")

nombre_cliente = "Carlos"
print("Cliente: " + nombre_clente)

print("Gracias por su compra"
