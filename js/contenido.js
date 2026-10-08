/* =========================================================================
   CONTENIDO DEL CURSO
   -------------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar cada vez que veas una
   clase nueva. No necesitas tocar index.html, estilos.css ni script.js.

   Para agregar un TEMA nuevo: copia un bloque dentro de TEMAS y cámbialo.
   Para agregar un TRABAJO nuevo: copia un bloque dentro de TRABAJOS.
   Si el trabajo tiene contenido extenso (preguntas, código, etc.), crea
   además su entrada en DETALLES y enlázala con la propiedad "detalle".
   ========================================================================= */

/* ---------- 1. TEMAS (sección "Temas") ---------- */
const TEMAS = [
    {
        grupo: "Fundamentos de compiladores",
        titulo: "Compilador vs. intérprete",
        contenido: `
            <p>
                Un compilador es un programa que toma código escrito en un lenguaje como C, Java o Python
                y lo traduce a lenguaje máquina, para que el hardware pueda ejecutarlo. Además de traducir,
                también revisa que el código esté bien escrito: sin errores de escritura, estructura o lógica.
            </p>
            <p>
                La diferencia clave con un intérprete es el momento de la traducción. El compilador analiza
                <strong>todo el programa</strong> de una vez y genera un archivo aparte; una vez creado, ya no
                necesita volver a compilarse. El intérprete no genera ningún archivo: lee y ejecuta el código
                línea por línea. Por eso lo compilado corre mucho más rápido, mientras que lo interpretado es
                más flexible para pruebas puntuales — de ahí que lenguajes como Python o JavaScript se usen
                comúnmente de forma interpretada.
            </p>
        `
    },
    {
        grupo: "Fundamentos de compiladores",
        titulo: "Fases del proceso de compilación",
        contenido: `
            <p>El código fuente pasa por distintos procesos, cada uno encargado de una tarea específica:</p>
            <ul class="tema-lista">
                <li><strong>Análisis léxico:</strong> agrupa caracteres en <em>tokens</em> con significado (palabras reservadas, operadores, identificadores).</li>
                <li><strong>Análisis sintáctico:</strong> verifica que el orden de los tokens cumpla las reglas gramaticales del lenguaje.</li>
                <li><strong>Análisis semántico:</strong> confirma que el código tenga sentido lógico: tipos compatibles, variables declaradas, alcance correcto.</li>
                <li><strong>Optimización:</strong> mejora el rendimiento sin cambiar el resultado — elimina código muerto, simplifica operaciones.</li>
                <li><strong>Generación de código:</strong> convierte el código analizado y optimizado en lenguaje máquina o ensamblador.</li>
            </ul>
        `
    },
    {
        grupo: "Fundamentos de compiladores",
        titulo: "Tipos de errores que detecta un compilador",
        contenido: `
            <p>Un compilador puede identificar tres tipos de errores durante el análisis:</p>
            <ul class="tema-lista">
                <li><strong>Léxicos:</strong> un carácter o secuencia que el lenguaje no reconoce como válida.</li>
                <li><strong>Sintácticos:</strong> la estructura del código no sigue las reglas gramaticales del lenguaje.</li>
                <li><strong>Semánticos:</strong> la estructura es correcta, pero el significado no lo es.</li>
            </ul>
            <p>En la sección <a href="#trabajos">Trabajos</a> puedes ver estos tres tipos de error identificados sobre un caso real.</p>
        `
    },
    {
        grupo: "Python",
        titulo: "Operadores en Python",
        contenido: `
            <p>Antes de generar código máquina, un compilador debe reconocer y evaluar operadores. Este taller repasa los seis
            tipos de operadores de Python mediante ejercicios prácticos:</p>
            <ul class="tema-lista">
                <li><strong>Aritméticos:</strong> suma, resta, multiplicación, división, módulo, potencia (+, -, *, /, %, **).</li>
                <li><strong>De asignación:</strong> modifican una variable en el mismo paso (+=, -=, *=, /=).</li>
                <li><strong>De comparación:</strong> evalúan relaciones entre valores (==, !=, &gt;, &lt;, &gt;=, &lt;=).</li>
                <li><strong>Lógicos:</strong> combinan condiciones booleanas (and, or, not).</li>
                <li><strong>De identidad:</strong> verifican si dos variables apuntan al mismo objeto en memoria (is, is not).</li>
                <li><strong>De pertenencia:</strong> verifican si un valor está contenido en una secuencia (in, not in).</li>
            </ul>
            <p>El código completo de los 30 ejercicios está en <a href="#trabajos">Trabajos</a>.</p>
        `
    },
    {
        grupo: "Python",
        titulo: "Google Colab",
        contenido: `
            <p>Google Colab es un entorno gratuito de Google que permite escribir y ejecutar código Python desde el navegador, sin instalación — el código corre en una máquina virtual, no en el propio computador, y todo se guarda en Google Drive.</p>
            <p>Es un buen lugar para ver en vivo los conceptos de compiladores: cada celda es una oportunidad de observar cómo Python reconoce el <strong>léxico</strong> (palabras reservadas, identificadores, literales, operadores), exige una <strong>sintaxis</strong> correcta (dos puntos, paréntesis, comillas), sigue una <strong>gramática</strong> interna (tokens → árbol de sintaxis abstracta → bytecode), y depende de la <strong>identación</strong> para saber qué instrucciones pertenecen a cada bloque.</p>
            <p>El desarrollo completo, con ejemplos de código para cada concepto, está en <a href="#trabajos">Trabajos</a>.</p>
            <p>Colab también es un buen entorno para depurar código con ayuda de IA: al corregir un error, conviene identificarlo primero, pedirle ayuda puntual a una IA (ChatGPT, Gemini, Copilot) y entender <em>por qué</em> funcionaba mal, en vez de copiar la corrección sin más — así se distingue, por ejemplo, un error funcional (impide que el programa corra) de uno de eficiencia (el programa corre, pero de forma menos óptima). El taller práctico con 10 ejercicios de este tipo también está en <a href="#trabajos">Trabajos</a>.</p>
        `
    }

    /* ---------- Agrega el siguiente tema aquí abajo, copiando este bloque ---------- 
    ,{
        grupo: "Nombre del módulo (agrupa temas relacionados; si repites el mismo texto que un tema anterior, queda bajo el mismo grupo)",
        titulo: "Nombre del tema nuevo",
        contenido: `<p>Contenido del tema...</p>`
    }
    */
];

/* ---------- 2. TRABAJOS (sección "Trabajos") ---------- */
const TRABAJOS = [
    {
        categoria: "teoria",           // "teoria" o "practica"
        etiqueta: "Teoría",
        titulo: "Taller de conceptos generales",
        resumen: "10 preguntas teóricas sobre qué es un compilador, sus fases y los tipos de error que puede detectar.",
        tecnologias: ["Genially", "Mapa mental"],
        detalle: "taller-conceptos"     // debe existir en DETALLES, o quita esta línea si no aplica
    },
    {
        categoria: "practica",
        etiqueta: "Práctica",
        titulo: "Análisis y optimización de código Python",
        resumen: "Identificación de errores léxicos, sintácticos, de indentación y semánticos en un informe de ventas, con su versión corregida y optimizada.",
        tecnologias: ["Python", "Genially"],
        detalle: "codigo-optimizado"
    },
    {
        categoria: "practica",
        etiqueta: "Práctica",
        titulo: "Taller de operadores en Python",
        resumen: "30 ejercicios en Python: operadores aritméticos, de asignación, comparación, lógicos, de identidad y de pertenencia.",
        tecnologias: ["Python"],
        detalle: "operadores-matematicos"
    },
    {
        categoria: "teoria",
        etiqueta: "Teoría",
        titulo: "Taller teórico: operadores en Python",
        resumen: "Concepto de operador, relación entre variables/valores/operadores, y análisis paso a paso de código para cada tipo de operador.",
        tecnologias: ["Manuscrito"],
        detalle: "taller-teorico-operadores"
    },
    {
        categoria: "practica",
        etiqueta: "Práctica",
        titulo: "Parcial práctico: operadores y detección de errores",
        resumen: "3 ejercicios con operadores (aritméticos, lógicos, pertenencia) y corrección de errores léxicos, sintácticos y semánticos en 2 códigos con fallas.",
        tecnologias: ["Python"],
        detalle: "parcial-practico-compiladores"
    },
    {
        categoria: "teoria",
        etiqueta: "Teoría",
        titulo: "Taller investigativo: Google Colab y Python",
        resumen: "Qué es Google Colab, su relación con Python, y cómo se aplican ahí el léxico, la sintaxis, la gramática y la identación.",
        tecnologias: ["Google Colab", "Genially"],
        detalle: "taller-google-colab"
    },
    {
        categoria: "practica",
        etiqueta: "Práctica",
        titulo: "Taller de depuración de código con IA en Google Colab",
        resumen: "10 ejercicios con errores reales en Python (pandas, recursión, matplotlib, scraping, NumPy, threading, requests, herencia, SQLite, bubble sort) depurados con ayuda de IA.",
        tecnologias: ["Python", "Google Colab", "IA"],
        detalle: "depuracion-colab-ia"
    }

    /* ---------- Agrega el siguiente trabajo aquí abajo, copiando este bloque ----------
    ,{
        categoria: "practica",
        etiqueta: "Práctica",
        titulo: "Nombre del trabajo nuevo",
        resumen: "Descripción corta de una o dos líneas.",
        tecnologias: ["Tecnología 1", "Tecnología 2"],
        detalle: "id-unico-del-detalle"   // opcional
    }
    */
];

/* ---------- 3. DETALLES (contenido de la ventana emergente de cada trabajo) ---------- */
const DETALLES = {
    "taller-conceptos": {
        titulo: "Taller — Conceptos generales de compiladores",
        enlaces: [
            { texto: "Ver mapa mental en Genially", url: "https://view.genially.com/6a9d623041de9a4170b748d1" }
        ],
        archivos: [
            { nombre: "Taller teórico (PDF)", url: "archivos/taller-conceptos/taller-teorico.pdf" }
        ],
        html: `
            <h4>1. ¿Qué es un compilador y cuál es su función principal?</h4>
            <p>Es un programa que toma código escrito en un lenguaje como C, Java o Python y lo traduce a lenguaje máquina, para que el hardware pueda ejecutarlo. Además de traducir, revisa que el código esté bien escrito, sin errores de escritura, estructura o lógica.</p>

            <h4>2. ¿Cuál es la diferencia entre un compilador y un intérprete?</h4>
            <p>El compilador toma el programa completo, lo analiza y genera un archivo aparte que luego puede ejecutarse cualquier cantidad de veces sin volver a compilar. El intérprete no genera nada aparte: lee y ejecuta el código línea por línea. Lo compilado es más rápido; lo interpretado es más flexible para pruebas puntuales.</p>

            <h4>3. ¿Cuáles son las fases principales del proceso de compilación?</h4>
            <ul>
                <li><strong>Análisis léxico:</strong> agrupa caracteres en tokens con significado.</li>
                <li><strong>Análisis sintáctico:</strong> valida que el código cumpla las reglas gramaticales del lenguaje.</li>
                <li><strong>Análisis semántico:</strong> verifica que las operaciones tengan sentido lógico.</li>
                <li><strong>Optimización:</strong> elimina redundancias y simplifica operaciones.</li>
                <li><strong>Generación de código:</strong> convierte el código fuente en código máquina o ensamblador.</li>
            </ul>

            <h4>4. ¿Qué ocurre durante la fase de análisis léxico?</h4>
            <p>El compilador lee el código fuente carácter a carácter, en orden específico, y los agrupa en tokens relacionados (palabra clave, identificador, operador, valor numérico). Aquí se descartan espacios, tabulaciones y comentarios, y se detectan los errores léxicos.</p>

            <h4>5. ¿Cómo se verifica la estructura gramatical del código en la fase de análisis sintáctico?</h4>
            <p>Con los tokens ya agrupados, se analiza que el orden en que se encuentran cumpla las reglas gramaticales del lenguaje — por ejemplo, que una expresión de asignación tenga identificador, signo igual, expresión válida y termine en punto y coma.</p>

            <h4>6. ¿Qué rol juega el análisis semántico en el proceso de compilación?</h4>
            <p>Comprueba que el código, ya validado en su sintaxis, tenga sentido en cuanto a significado: tipos de datos compatibles, variables declaradas antes de usarse, funciones con la cantidad adecuada de argumentos y alcance correcto de las variables. Se apoya en la tabla de símbolos.</p>

            <h4>7. ¿En qué consiste la optimización de código durante la compilación?</h4>
            <p>El objetivo es mejorar el programa sin cambiar el resultado que produce, de forma más eficiente en tiempo de ejecución, uso de memoria y consumo de energía: eliminar código muerto, propagar constantes, optimizar bucles y asignar registros de forma eficiente.</p>

            <h4>8. ¿Qué tipos de errores puede detectar un compilador durante la fase de análisis?</h4>
            <ul>
                <li><strong>Léxicos:</strong> carácter o secuencia que el lenguaje no reconoce como válida.</li>
                <li><strong>Sintácticos:</strong> la estructura no sigue las reglas gramaticales del lenguaje.</li>
                <li><strong>Semánticos:</strong> estructura correcta, pero sin sentido lógico (variables no declaradas, tipos mezclados, argumentos incorrectos).</li>
            </ul>

            <h4>9. ¿Qué es la generación de código en el contexto de un compilador?</h4>
            <p>Es la fase final del proceso: con el programa ya analizado, verificado y optimizado, falta traducirlo al lenguaje máquina que entiende el hardware. Aquí se toman decisiones orientadas al hardware, como qué registros usar o cómo traducir cada instrucción intermedia en instrucciones reales de la máquina.</p>

            <h4>10. ¿Por qué es importante la optimización de código y cómo afecta el rendimiento del programa?</h4>
            <p>Un mismo programa puede traducirse de muchas formas a nivel de máquina, pero no todas son igual de eficientes. Sin optimización, el programa puede hacer cálculos innecesarios o desperdiciar recursos. Un programa bien optimizado corre más rápido, consume menos memoria y aprovecha mejor los recursos.</p>
        `
    },

    "codigo-optimizado": {
        titulo: "Análisis y optimización de código Python",
        enlaces: [
            { texto: "Ver cuadro diferencial en Genially", url: "https://view.genially.com/6a9d8b31f7864099e8dbbe19" }
        ],
        archivos: [
            { nombre: "Manuscrito con el análisis de errores (PDF)", url: "archivos/codigo-optimizado/manuscrito-errores.pdf" },
            { nombre: "Código original (.py)", url: "archivos/codigo-optimizado/codigo-original.py" },
            { nombre: "Código corregido (.py)", url: "archivos/codigo-optimizado/codigo-corregido.py" }
        ],
        codigo: [
            {
                id: "original",
                etiqueta: "Código original",
                archivo: "codigo_original.py",
                contenido: `productos = ["Computador", "Teclado", "Mouse", "Monitor"]
precios = [2500000, 120000, 50000, 800000]
cantidades = [2, 5, 10, 3]

total = 0
print("INFORME DE VENTAS")

for i in range(len(productos))
    subtotal = precios[i] * cantidades[i]
    if cantidades[i] > 5
        descuento = subtotal * 0.10
    else:
        descuento = 0
    total_producto = subtotal - descuento
    total = total + total_producto

promedio = total / cantidades

if total > 5000000:
print("Venta mayorista")
else:
    print("Venta normal")

nombre_cliente = "Carlos"
print("Cliente: " + nombre_clente)
print("Gracias por su compra"`
            },
            {
                id: "corregido",
                etiqueta: "Código corregido",
                archivo: "codigo_corregido.py",
                contenido: `productos = ["Computador", "Teclado", "Mouse", "Monitor"]
precios = [2500000, 120000, 50000, 800000]
cantidades = [2, 5, 10, 3]

total = 0
print("INFORME DE VENTAS")

for producto, precio, cantidad in zip(productos, precios, cantidades):
    subtotal = precio * cantidad
    descuento = subtotal * 0.10 if cantidad > 5 else 0
    total_producto = subtotal - descuento
    print(f"Producto: {producto} | Total: {total_producto}")
    total += total_producto

promedio = total / sum(cantidades)

print("Venta mayorista" if total > 5000000 else "Venta normal")

nombre_cliente = "Carlos"
print(f"Cliente: {nombre_cliente}")
print("Gracias por su compra")`
            }
        ],
        html: `
            <h4>Errores encontrados</h4>
            <ul class="errores-lista">
                <li><strong>Léxico:</strong> <code>nombre_clente</code> estaba mal escrito y no coincidía con la variable declarada <code>nombre_cliente</code>, así que Python no la reconocía.</li>
                <li><strong>Sintáctico:</strong> faltaban los dos puntos ( : ) al final del <code>for</code> y del <code>if</code>, y faltaba un paréntesis de cierre en el último <code>print</code>.</li>
                <li><strong>Indentación:</strong> el <code>print("Venta mayorista")</code> no tenía la sangría correspondiente al bloque del <code>if</code>.</li>
                <li><strong>Semántico:</strong> <code>promedio = total / cantidades</code> dividía un número entre una lista completa, lo cual no es una operación válida — se corrigió dividiendo entre <code>sum(cantidades)</code>.</li>
            </ul>
            <p style="margin-top:14px">Además de corregir, se optimizó: se reemplazó el recorrido por índice con <code>range(len(...))</code> por <code>zip()</code> para recorrer las tres listas a la vez, los bloques if/else de descuento y tipo de venta se unificaron con operador ternario, y todas las impresiones se homogeneizaron con f-strings.</p>
        `
    },

    "taller-teorico-operadores": {
        titulo: "Taller teórico — Operadores en Python",
        enlaces: [
            { texto: "Ver cuadro comparativo en Genially", url: "https://view.genially.com/6aa70a3de8519f1a2d842f5d" }
        ],
        archivos: [
            { nombre: "Manuscrito completo (PDF)", url: "archivos/operadores-matematicos/taller-teorico-operadores.pdf" }
        ],
        html: `
            <h4>Concepto general de operadores</h4>
            <p>Un operador es un símbolo o palabra que permite realizar operaciones sobre uno o más valores. Muchos operadores que se usan en matemáticas se implementan también en programación, aunque a veces cambian su forma de representarse (por ejemplo, la división se escribe con <code>/</code>), manteniendo la misma finalidad.</p>
            <p>Un operador lógico se diferencia de uno matemático en que el matemático realiza cálculos (sumar, restar, multiplicar, dividir), mientras que el lógico evalúa y combina condiciones para obtener como resultado "verdadero" o "falso".</p>
            <p>Los operadores son fundamentales en programación porque permiten realizar cálculos, comparar datos, modificar valores y tomar decisiones dentro de un programa — sin ellos prácticamente no habría programación.</p>
            <p><strong>Variables, valores y operadores</strong> están relacionados así: la variable es el espacio que se genera en memoria para guardar un dato; el valor es el dato que contiene esa variable; y el operador es lo que permite realizar operaciones utilizando esos datos. Por ejemplo:</p>
            <pre>precio = 10000
cantidad = 5
total = precio * cantidad
print(f"El total a pagar es de: {total} pesos")</pre>

            <h4>Operadores aritméticos</h4>
            <p>Permiten realizar cálculos matemáticos dentro de un programa:</p>
            <ul>
                <li><strong>+ (suma):</strong> suma dos o más valores</li>
                <li><strong>- (resta):</strong> diferencia entre dos valores</li>
                <li><strong>* (multiplicación):</strong> multiplica dos valores</li>
                <li><strong>/ (división):</strong> divide dos números y arroja un decimal</li>
                <li><strong>// (división entera):</strong> divide dos números y conserva solo la parte entera</li>
                <li><strong>% (módulo):</strong> residuo que queda después de dividir</li>
                <li><strong>** (potencia):</strong> eleva un número a una potencia determinada</li>
            </ul>
            <p>La diferencia entre división normal y entera: la normal devuelve el resultado completo incluyendo decimales (<code>15 / 4 = 3.75</code>); la entera solo devuelve la parte entera del resultado (<code>15 // 4 = 3</code>).</p>
            <p>El operador módulo (%) sirve para obtener el residuo de una división. Es muy útil para saber si un número es par, controlar ciclos, cantidades y otras situaciones donde se necesite conocer el residuo de una división.</p>
            <p>Tres situaciones reales donde se usan operadores aritméticos: calcular el precio total de varios productos con el mismo precio (multiplicación); calcular descuentos, bonificaciones y horas de trabajo en salarios (varias operaciones); y saber cuántos grupos completos se pueden formar con productos sobrantes usando división entera y módulo.</p>
            <p>Análisis de código (a = 15, b = 4):</p>
            <pre>a = 15
b = 4
print(a + b)   # Suma los dos valores → 19
print(a - b)   # Realiza una resta → 11
print(a * b)   # Hace una multiplicación → 60
print(a / b)   # Realiza una división normal → 3.75
print(a // b)  # Realiza una división entera → 3
print(a % b)   # Obtiene el residuo de la división → 3
print(a ** b)  # Eleva 15 a la potencia 4</pre>

            <h4>Operadores de asignación</h4>
            <p>Permiten guardar valores dentro de variables y modificarlos durante la ejecución del programa. Asignar un valor a una variable significa guardar un dato dentro de ella para poder usarlo más adelante.</p>
            <p><code>x = x + 5</code> y <code>x += 5</code> hacen exactamente lo mismo: toman el valor actual de la variable, le suman 5, y guardan el resultado nuevamente en la misma variable — la segunda es solo una forma más corta de escribir la primera.</p>
            <p>Una situación real: el inventario de una tienda, donde se puede aumentar el valor de una variable que representa el stock de un producto, o modificar dinero, cantidades o puntos de un concurso durante la ejecución del programa.</p>
            <p>Análisis de código:</p>
            <pre>x = 50
x += 10   # Se suman 10 → 60
x -= 5    # Se restan 5 → 55
x *= 2    # Se multiplica x2 → 110
x /= 5    # Se divide entre 5 → 22

# El resultado final de x es 22</pre>

            <h4>Operadores de comparación</h4>
            <p>Se utilizan para comparar valores; el resultado siempre será verdadero (True) o falso (False).</p>
            <ul>
                <li><strong>==</strong> igual que: comprueba si dos valores son iguales</li>
                <li><strong>!=</strong> diferente de: comprueba si son diferentes</li>
                <li><strong>&gt;</strong> mayor que: comprueba si el valor 1 es mayor que el valor 2</li>
                <li><strong>&lt;</strong> menor que: comprueba si el valor 1 es menor que el valor 2</li>
                <li><strong>&gt;=</strong> mayor o igual que</li>
                <li><strong>&lt;=</strong> menor o igual que</li>
            </ul>
            <p>Un ejemplo real es comparar las notas de un estudiante para determinar si aprueba una asignatura:</p>
            <pre>if nota_final >= 3.0:
    print("Aprobó Compiladores")
else:
    print("Reprobó Compiladores")</pre>
            <p>Análisis de código: <code>edad = 18; print(edad >= 18)</code> — el programa verifica si la edad es mayor o igual a 18 años. El resultado es <code>True</code>, porque la persona tiene exactamente 18 años y cumple la condición de ser mayor o igual a 18.</p>

            <h4>Operadores lógicos</h4>
            <p>Permiten combinar varias condiciones dentro de un programa. Una condición lógica es una expresión que puede arrojar como resultado verdadero o falso. Los operadores son <strong>and</strong>, <strong>or</strong> y <strong>not</strong>:</p>
            <ul>
                <li><strong>and:</strong> para obtener un resultado verdadero, todas las condiciones deben cumplirse.</li>
                <li><strong>or:</strong> el resultado es verdadero cuando al menos una de las condiciones se cumple.</li>
                <li><strong>not:</strong> niega o invierte una condición dada — si es verdadera la convierte en falsa, y viceversa.</li>
            </ul>
            <p>Una situación real: el acceso a una plataforma educativa, donde se comprueba que el estudiante tenga una cuenta creada <strong>y</strong> que esa cuenta cuente con los documentos registrados para permitir el acceso.</p>
            <p>Análisis de código: <code>edad = 20; tiene_documento = True; print(edad >= 18 and tiene_documento)</code> — el programa comprueba que la edad sea mayor o igual a 18 y que la persona tenga documento, siendo ambas condiciones verdaderas, por lo que el resultado es <code>True</code>.</p>

            <h4>Operadores de identidad</h4>
            <p>Permiten verificar si dos variables hacen referencia al mismo objeto en memoria — no solo que tengan el mismo contenido, sino que apunten literalmente al mismo espacio en memoria.</p>
            <p>La diferencia entre igualdad e identidad: la igualdad (<code>==</code>) comprueba si dos objetos tienen el mismo contenido o valor; la identidad (<code>is</code>) comprueba si las dos variables hacen referencia al mismo objeto en memoria. Dos listas pueden contener los mismos números pero almacenarse como listas distintas.</p>
            <p>Análisis de código:</p>
            <pre>a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)   # True: mismo contenido
print(a is b)   # False: son dos objetos distintos en memoria</pre>

            <h4>Operadores de pertenencia</h4>
            <p>Se utilizan para verificar si un elemento pertenece a una colección de datos (una estructura que permite almacenar varios elementos, como una lista de números, nombres o productos).</p>
            <ul>
                <li><strong>in:</strong> comprueba si un elemento está dentro de una colección.</li>
                <li><strong>not in:</strong> comprueba si un elemento no se encuentra dentro de una colección.</li>
            </ul>
            <p>Un ejemplo real: verificar si un usuario está registrado en un sistema, comprobando si su nombre se encuentra dentro de una lista de elementos.</p>
            <p>Análisis de código:</p>
            <pre>numeros = [10, 20, 30, 40]
print(20 in numeros)   # True: 20 sí está en la lista
print(50 in numeros)   # False: 50 no está en la lista</pre>

            <h4>Análisis reflexivo</h4>
            <p><strong>¿Por qué los operadores matemáticos son esenciales en programación?</strong> Permiten realizar cálculos y procesar información numérica — es lo que hace posible que exista software capaz de calcular precios, salarios, promedios, impuestos, distancias y muchos otros datos.</p>
            <p><strong>¿Qué tipo de operador es más importante?</strong> Los aritméticos podrían parecer los más relevantes por su uso en tantos programas, pero en realidad todos son necesarios, ya que cada uno cumple funciones específicas que hacen a los programas más completos y eficientes.</p>
            <p><strong>¿Cómo ayudan los operadores a resolver problemas reales?</strong> Son el medio para transformar situaciones de la vida real en instrucciones que puede procesar un computador — los bancos los usan para calcular intereses, los colegios para calcular promedios, las empresas para procesar información, etc.</p>
            <p><strong>¿Qué errores comunes cometen los estudiantes al usar operadores?</strong> Confundir el operador de asignación (<code>=</code>) con el de igualdad (<code>==</code>); olvidar que existe división normal (<code>/</code>) y división entera (<code>//</code>); aplicar mal los operadores lógicos <code>and</code>, <code>or</code> y <code>not</code>, especialmente al combinar varias condiciones; y usar incorrectamente los operadores de comparación.</p>
        `
    },

    "parcial-practico-compiladores": {
        titulo: "Parcial práctico — Operadores y detección de errores",
        archivos: [
            { nombre: "Enunciado del parcial (PDF)", url: "archivos/parcial-practico/enunciado-parcial.pdf" },
            { nombre: "Análisis manuscrito completo (PDF)", url: "archivos/parcial-practico/analisis-manuscrito.pdf" }
        ],
        codigo: [
            {
                id: "rectangulo",
                etiqueta: "Área rectángulo",
                archivo: "area_rectangulo.py",
                contenido: `# Ejercicio 1: Operadores aritméticos — área de un rectángulo
largo = float(input("Digita el largo del rectángulo: "))
ancho = float(input("Digita el ancho del rectángulo: "))
area = largo * ancho
print(f"El área del rectángulo es: {area}")`
            },
            {
                id: "votar",
                etiqueta: "Verificar voto",
                archivo: "verificar_voto.py",
                contenido: `# Ejercicio 2: Operadores lógicos — verificar si una persona puede votar
edad = int(input("Digita la edad: "))
tiene_cedula = input("¿Tiene cédula? (si/no): ").lower() == "si"
esta_habilitado = input("¿Está habilitado para votar? (si/no): ").lower() == "si"
pertenece_a_rama_judicial = input("¿Pertenece a la rama judicial? (si/no): ").lower() == "si"

if edad >= 18 and tiene_cedula and esta_habilitado and pertenece_a_rama_judicial:
    print("Puede votar")
else:
    print("No puede votar")`
            },
            {
                id: "frutas",
                etiqueta: "Pertenencia frutas",
                archivo: "pertenencia_frutas.py",
                contenido: `# Ejercicio 3: Operadores de pertenencia — verificar frutas en una lista
frutas = ["manzana", "banano", "pera", "uva", "mango"]

fruta1 = input("Digite una fruta a verificar: ")
print(f"¿'{fruta1}' está en la lista? {fruta1 in frutas}")

fruta2 = input("Digite otra fruta a verificar: ")
print(f"¿'{fruta2}' está en la lista? {fruta2 in frutas}")`
            },
            {
                id: "promedio-original",
                etiqueta: "Promedio (original)",
                archivo: "calcular_promedio_original.py",
                contenido: `def calcular_promedio(numeros):
    suma = 0
    para numero en numeros:
        suma += numero
    promedio = suma / len(numeros)
    print("El promedio es: " + promedio)

numeros = [10, 20, 30, 40, 50]
calcular_promedio(numeros)

if len(numeros) > 0
    print(La lista no está vacía)
    else:
    print(La lista está vacía)`
            },
            {
                id: "promedio-corregido",
                etiqueta: "Promedio (corregido)",
                archivo: "calcular_promedio_corregido.py",
                contenido: `def calcular_promedio(numeros):
    suma = 0
    for numero in numeros:
        suma += numero
    promedio = suma / len(numeros)
    print(f"El promedio es: {promedio}")

numeros = [10, 20, 30, 40, 50]
calcular_promedio(numeros)

if len(numeros) > 0:
    print("La lista no está vacía")
else:
    print("La lista está vacía")`
            },
            {
                id: "palindromo-original",
                etiqueta: "Palíndromo (original)",
                archivo: "es_palindromo_original.py",
                contenido: `# Determinar si una palabra es un palíndromo
def es_palindromo(palabra):
    palabra = palabra.lower()

    return palabra = palabra[::-1]

palabra = input("Introduce una palabra: ")

if es_palindromo(palabra):
    print(f'"{palabra}" es un palindromo.')
else:
    print(f'"{palabra}" no es un palindromo.')
    print("Intenta con otra palabra")`
            },
            {
                id: "palindromo-corregido",
                etiqueta: "Palíndromo (corregido)",
                archivo: "es_palindromo_corregido.py",
                contenido: `# Determinar si una palabra es un palíndromo
def es_palindromo(palabra):
    palabra = palabra.lower()
    return palabra == palabra[::-1]

palabra = input("Introduce una palabra: ")

if es_palindromo(palabra):
    print(f'"{palabra}" es un palíndromo.')
else:
    print(f'"{palabra}" no es un palíndromo.')
    print("Intenta con otra palabra")`
            }
        ],
        html: `
            <p>Los ejercicios 1 a 3 aplican operadores aritméticos, lógicos y de pertenencia sobre problemas concretos. Los ejercicios 4 y 5 pedían encontrar, corregir e indicar los errores léxicos, sintácticos y semánticos en dos códigos entregados con fallas.</p>

            <h4>Errores encontrados — Calcular promedio</h4>
            <ul class="errores-lista">
                <li><strong>Léxico:</strong> se usaron las palabras <code>para</code> y <code>en</code> en vez de las palabras reservadas de Python <code>for</code> e <code>in</code>.</li>
                <li><strong>Sintáctico:</strong> faltaban los dos puntos ( : ) al final de <code>if len(numeros) > 0</code> para poder ejecutar la instrucción.</li>
                <li><strong>Sintáctico:</strong> los mensajes <code>La lista no está vacía</code> / <code>La lista está vacía</code> no tenían comillas, así que Python los interpretaba como variables en vez de texto.</li>
                <li><strong>Indentación:</strong> el <code>else</code> no estaba alineado con su <code>if</code> correspondiente.</li>
                <li><strong>Semántico:</strong> <code>"El promedio es: " + promedio</code> intentaba concatenar un texto con un número decimal, lo cual genera un error de tipo — se corrigió usando un f-string.</li>
            </ul>

            <h4>Errores encontrados — Palíndromo</h4>
            <ul class="errores-lista">
                <li><strong>Sintáctico:</strong> <code>return palabra = palabra[::-1]</code> usa el operador de asignación (=) dentro de un <code>return</code>, donde Python espera una expresión, no una asignación.</li>
                <li><strong>Semántico:</strong> por ese mismo motivo la función nunca comparaba la palabra con su reverso — se corrigió usando el operador de comparación (==): <code>return palabra == palabra[::-1]</code>, que sí verifica si la palabra es un palíndromo.</li>
            </ul>
        `
    },

    "taller-google-colab": {
        titulo: "Taller investigativo — Google Colab y Python",
        enlaces: [
            { texto: "Ver infografía en Genially", url: "https://view.genially.com/6ab4644af5a498bb3e8169ef" },
            { texto: "Sitio oficial de Google Colab", url: "https://colab.google" },
            { texto: "Abrir Google Colab", url: "https://colab.research.google.com/?utm_source=scs-index" }
        ],
        archivos: [
            { nombre: "Enunciado del taller (PDF)", url: "archivos/taller-google-colab/enunciado-taller.pdf" },
            { nombre: "Informe final completo (PDF)", url: "archivos/taller-google-colab/informe-final.pdf" }
        ],
        html: `
            <h4>¿Qué es Google Colab?</h4>
            <p>Google Colab es un entorno gratuito de Google que permite escribir y ejecutar código Python desde el navegador, sin necesidad de instalación. Funciona con cuadernos de Jupyter, donde se pueden crear y compartir documentos con código en vivo, texto explicativo, imágenes y gráficos. El código lo ejecuta una máquina virtual (no el computador del usuario), por lo que funciona bien incluso en equipos con pocos recursos; todo se almacena en Google Drive. Fue desarrollado por Google Research para facilitar la investigación y la educación, especialmente en áreas como machine learning.</p>

            <h4>Características principales</h4>
            <ul>
                <li>No requiere instalación: solo navegador y cuenta de Google.</li>
                <li>Entorno ya configurado para Python, con librerías populares preinstaladas (NumPy, pandas, Matplotlib, scikit-learn, TensorFlow, PyTorch).</li>
                <li>Acceso a hardware acelerado (GPU/TPU), limitado en la versión gratuita.</li>
                <li>Integración directa con Google Drive.</li>
                <li>Cuadernos interactivos con celdas de código y de texto.</li>
                <li>Colaboración en tiempo real, con permisos de lectura, comentario o edición.</li>
                <li>Visualización integrada de gráficos y tablas debajo de cada celda.</li>
            </ul>

            <h4>Ventajas frente a instalar Python localmente</h4>
            <p>Colab se puede usar desde cualquier dispositivo con internet sin configurar nada, permite compartir y colaborar por enlace, guarda todo automáticamente en la nube, y ofrece GPU/TPU sin depender del hardware del equipo. Python local, en cambio, requiere instalar el intérprete, gestionar librerías manualmente, y depende del sistema operativo y los recursos del computador — aunque no depende de tener internet.</p>

            <h4>Estructura del entorno de trabajo</h4>
            <ul>
                <li><strong>Celdas de código:</strong> donde se escribe y ejecuta Python (Shift+Enter o el botón de play); las variables definidas quedan disponibles mientras la sesión siga activa.</li>
                <li><strong>Celdas de texto:</strong> para títulos, explicaciones, enlaces e imágenes.</li>
                <li><strong>Menús:</strong> Archivo, Editar, Ver, Insertar, Entorno de ejecución (incluye cambiar entre CPU/GPU/TPU), Herramientas y Ayuda.</li>
                <li><strong>Ejecución del código:</strong> al ejecutar una celda, el código se envía a un kernel de Python en la máquina virtual de Google, que lo interpreta y devuelve el resultado al navegador. El orden de ejecución de las celdas importa, porque unas pueden depender de variables definidas en otras.</li>
            </ul>

            <h4>Léxico en Python (dentro de Google Colab)</h4>
            <p>El léxico es el conjunto de palabras y símbolos con significado que reconoce un lenguaje. Es la primera fase del análisis en compilación e interpretación: el código se lee como texto y se divide en tokens, cada uno con un tipo y un valor.</p>
            <ul>
                <li><strong>Palabras reservadas:</strong> if, else, for, while, def, return, class, import, True, None...</li>
                <li><strong>Identificadores:</strong> nombres dados por quien programa — edad, nombre_usuario, calcular_total.</li>
                <li><strong>Literales:</strong> valores escritos directamente en el código — 25 (entero), 3.14 (decimal), "Hola" (cadena), True (booleano).</li>
                <li><strong>Operadores:</strong> +, -, *, /, ==, &gt;=, and, or, not.</li>
                <li><strong>Delimitadores:</strong> ( ), [ ], { }, , , : — separan y agrupan elementos como listas, diccionarios y tuplas.</li>
            </ul>
            <pre>import keyword
print(keyword.kwlist)  # lista de palabras reservadas

import tokenize, io
codigo = "edad = 18\\n"
for tok in tokenize.generate_tokens(io.StringIO(codigo).readline):
    print(tokenize.tok_name[tok.type], repr(tok.string))

# NAME 'edad'
# OP '='
# NUMBER '18'</pre>

            <h4>Sintaxis</h4>
            <p>La sintaxis define las reglas para estructurar correctamente los componentes del léxico y formar instrucciones válidas — determina cómo se combinan los tokens. En compilación, el análisis sintáctico verifica que las secuencias de tokens respeten esas reglas gramaticales.</p>
            <pre># Código correcto
nombre = "Ana"
print("Hola,", nombre)
# → Hola, Ana

# Código con errores
print("Hola, nombre        # falta cerrar comillas y paréntesis
if edad > 18                # falta el ":" al final
    print("Mayor")
x = = 5                     # operador mal escrito
# SyntaxError: unterminated string literal</pre>

            <h4>Gramática</h4>
            <p>La gramática son las reglas estructurales que determinan qué programas son válidos en un lenguaje. La sintaxis es lo que la persona programadora escribe y cumple; la gramática es la especificación formal que lo describe internamente. Python organiza las instrucciones así: primero el análisis léxico convierte todo en tokens (incluyendo INDENT y DEDENT, los de identación); luego el analizador sintáctico aplica la gramática y construye un árbol de sintaxis abstracta (AST); y ese árbol se traduce a bytecode, el código intermedio que ejecuta la máquina virtual de Python.</p>
            <pre>import ast
arbol = ast.parse("x = 2 + 3")
print(ast.dump(arbol, indent=2))

# Module(body=[Assign(targets=[Name(id='x')],
#   value=BinOp(left=Constant(value=2), op=Add(),
#               right=Constant(value=3)))])</pre>

            <h4>Identación</h4>
            <p>Python usa la identación (espacios al inicio de línea) en vez de llaves para indicar qué instrucciones pertenecen a un bloque (if, for, una función, etc.). Los tokens de identación se generan desde la fase de análisis léxico.</p>
            <pre># Funciona correctamente
numero = 5
if numero > 0:
    print("Es positivo")
    print("Fin del bloque")
print("Esto se ejecuta siempre")

# Error por mala identación
numero = 5
if numero > 0:
print("Es positivo")
# IndentationError: expected an indented block after 'if' statement</pre>
            <p>La ubicación de la identación no solo evita errores — también cambia el resultado sin avisar. Con el mismo código, según qué línea quede dentro o fuera del bloque, el <code>for</code> puede imprimir "fin" en cada vuelta o solo una vez al final.</p>

            <h4>Aplicaciones prácticas</h4>
            <ul>
                <li><strong>Ciencia de datos:</strong> cargar, limpiar y graficar datos con pandas, Matplotlib o Seaborn, todo documentado en el cuaderno.</li>
                <li><strong>Inteligencia artificial:</strong> entrenar redes con TensorFlow o PyTorch aprovechando la GPU gratuita.</li>
                <li><strong>Educación:</strong> docentes comparten cuadernos con teoría y ejercicios listos para ejecutar.</li>
                <li><strong>Desarrollo de software:</strong> prototipos, consumo de APIs, automatización de tareas.</li>
                <li><strong>Investigación:</strong> compartir experimentos reproducibles con código, datos y conclusiones en un mismo sitio.</li>
            </ul>

            <h4>Reflexión crítica</h4>
            <p>Google Colab reduce la percepción de complejidad del aprendizaje de programación: basta un navegador y una cuenta de Google, sin lidiar con instalaciones ni versiones. Su formato de celdas permite probar y verificar ideas de inmediato, y resulta especialmente útil para entender en vivo los conceptos de compiladores — ver los errores léxicos, sintácticos y de identación tal como Python los interpreta. También facilita el trabajo en equipo y da acceso gratuito a IA y datos reales. Como puntos a considerar: necesita conexión a internet y cuenta de Google, sus recursos gratuitos son limitados, y el uso excesivo de IA para autocompletar o generar código puede afectar la comprensión real del aprendizaje.</p>
        `
    },

    "depuracion-colab-ia": {
        titulo: "Taller — Depuración de código con IA en Google Colab",
        enlaces: [
            { texto: "Ver cuaderno de Colab con las correcciones", url: "https://colab.research.google.com/drive/1gQZTGWO-Qh7UMC-wZW4XRYfqIMf5nCkw?usp=sharing" }
        ],
        archivos: [
            { nombre: "Enunciado del taller (PDF)", url: "archivos/depuracion-colab-ia/enunciado-taller.pdf" },
            { nombre: "Documentación: problemática y solución (PDF)", url: "archivos/depuracion-colab-ia/documentacion.pdf" },
            { nombre: "Conclusiones manuscritas (PDF)", url: "archivos/depuracion-colab-ia/conclusiones.pdf" },
            { nombre: "Los 10 ejercicios corregidos (.py)", url: "archivos/depuracion-colab-ia/taller_depuracion_corregido.py" }
        ],
        codigo: [
            {
                id: "ej1", etiqueta: "1. Pandas", archivo: "analisis_datos_pandas.py",
                contenido: `# ANTES — con el error
import pandas as pd

# Cargar un archivo CSV
df = pd.read_csv("ventas.csv")

# Mostrar las primeras 5 filas
print(df.head())
# FileNotFoundError: el archivo "ventas.csv" no existe en el entorno de Colab


# ================================
# DESPUÉS — corregido
try:
    df = pd.read_csv("ventas.csv")
    print(df.head())
except FileNotFoundError:
    print("El archivo 'ventas.csv' no existe. Verifica la ruta o sube el archivo a Colab.")
    df = pd.DataFrame({"producto": ["A", "B", "C"], "ventas": [10, 20, 30]})
    print("Usando datos de ejemplo:")
    print(df.head())`
            },
            {
                id: "ej2", etiqueta: "2. Recursión", archivo: "funcion_recursiva.py",
                contenido: `# ANTES — con el error
def factorial(n):
    return n * factorial(n-1)

print(factorial(5))
# RecursionError: no hay caso base, la función se llama a sí misma indefinidamente


# ================================
# DESPUÉS — corregido
def factorial(n):
    if n <= 1:          # caso base agregado
        return 1
    return n * factorial(n - 1)

print(factorial(5))     # 120`
            },
            {
                id: "ej3", etiqueta: "3. Matplotlib", archivo: "grafico_distribucion_matplotlib.py",
                contenido: `# ANTES — con el error
import numpy as np
import matplotlib.pyplot as plt

datos = np.random.normal(loc=50, scale=15, size=1000)

plt.hist(datos)
plt.show()
# Se ejecuta sin error, pero sin bins ni etiquetas el gráfico es confuso


# ================================
# DESPUÉS — corregido
plt.figure(figsize=(8, 5))
plt.hist(datos, bins=30, color="steelblue", edgecolor="black")  # bins definido explícitamente
plt.title("Distribución de datos")
plt.xlabel("Valor")
plt.ylabel("Frecuencia")
plt.show()`
            },
            {
                id: "ej4", etiqueta: "4. Web Scraping", archivo: "web_scraping_beautifulsoup.py",
                contenido: `# ANTES — con el error
import requests
from bs4 import BeautifulSoup

url = "https://example.com"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

print(soup.title.text)
# El sitio puede rechazar la solicitud por no incluir un User-Agent


# ================================
# DESPUÉS — corregido
headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}  # encabezado agregado

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")

print(soup.title.text if soup.title else "No se encontró el título")`
            },
            {
                id: "ej5", etiqueta: "5. NumPy", archivo: "manipulacion_arrays_numpy.py",
                contenido: `# ANTES — con el error
import numpy as np

array = np.arange(10)
matriz = array.reshape(3, 3)
print(matriz)
# ValueError: no se puede acomodar un array de 10 elementos en una forma de 3x3 (9 elementos)


# ================================
# DESPUÉS — corregido
array = np.arange(9)          # se ajusta a 9 elementos (3x3 = 9)
matriz = array.reshape(3, 3)
print(matriz)`
            },
            {
                id: "ej6", etiqueta: "6. Threading", archivo: "uso_hilos_threading.py",
                contenido: `# ANTES — con el error
import threading

contador = 0

def incrementar():
    global contador
    for _ in range(1000):
        contador += 1

t1 = threading.Thread(target=incrementar)
t2 = threading.Thread(target=incrementar)

t1.start(); t2.start()
t1.join(); t2.join()

print("Valor final del contador:", contador)
# Condición de carrera: el resultado final es impredecible (no siempre da 2000)


# ================================
# DESPUÉS — corregido
lock = threading.Lock()       # candado agregado para sincronizar el acceso

def incrementar():
    global contador
    for _ in range(1000):
        with lock:             # sección crítica protegida
            contador += 1

# ... (resto igual)
print("Valor final del contador:", contador)  # siempre 2000`
            },
            {
                id: "ej7", etiqueta: "7. API requests", archivo: "api_con_requests.py",
                contenido: `# ANTES — con el error
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)

print(response.json())
# Si la API falla o responde con error, el programa no da ninguna información útil


# ================================
# DESPUÉS — corregido
try:
    response = requests.get(url, timeout=5)
    response.raise_for_status()  # lanza excepción si el código HTTP indica error
    print(response.json())
except requests.exceptions.RequestException as e:
    print(f"Error al consultar la API: {e}")`
            },
            {
                id: "ej8", etiqueta: "8. Herencia", archivo: "clase_herencia.py",
                contenido: `# ANTES — con el error
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

class Perro(Animal):
    def __init__(self, nombre, raza):
        self.raza = raza    # nunca llama al __init__ de Animal

    def ladrar(self):
        print(f"{self.nombre} está ladrando.")

mi_perro = Perro("Firulais", "Labrador")
mi_perro.ladrar()
# AttributeError: 'Perro' object has no attribute 'nombre'


# ================================
# DESPUÉS — corregido
class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)  # se inicializa la clase base
        self.raza = raza

    def ladrar(self):
        print(f"{self.nombre} está ladrando.")`
            },
            {
                id: "ej9", etiqueta: "9. SQLite", archivo: "conexion_sqlite.py",
                contenido: `# ANTES — con el error
import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nombre TEXT)")
cursor.execute("INSERT INTO usuarios (nombre) VALUES ('Juan')")

conn.close()
# Los cambios nunca se guardan de forma permanente: falta conn.commit()


# ================================
# DESPUÉS — corregido
conn.commit()      # confirmación de cambios agregada
conn.close()`
            },
            {
                id: "ej10", etiqueta: "10. Bubble Sort", archivo: "algoritmo_ordenamiento.py",
                contenido: `# ANTES — con el error (funciona, pero es ineficiente)
def bubble_sort(lista):
    n = len(lista)
    for i in range(n):
        for j in range(n - 1):
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]

numeros = [5, 3, 8, 1, 2]
bubble_sort(numeros)
print(numeros)
# El rango interno no se reduce: repite comparaciones ya innecesarias


# ================================
# DESPUÉS — optimizado
def bubble_sort(lista):
    n = len(lista)
    for i in range(n):
        for j in range(0, n - i - 1):   # el rango se reduce en cada pasada
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]

numeros = [5, 3, 8, 1, 2]
bubble_sort(numeros)
print(numeros)   # [1, 2, 3, 5, 8]`
            }
        ],
        html: `
            <p>Cada ejercicio tenía un error que impedía su ejecución o afectaba su lógica. El proceso fue: identificar el error, pedirle ayuda a una IA (ChatGPT, Gemini o Copilot) para corregirlo en Google Colab, y documentar el problema, la solución y una conclusión personal por cada punto.</p>

            <h4>1. Análisis de datos con Pandas</h4>
            <p><strong>Problema:</strong> se intentaba leer un archivo CSV que no existe en el entorno de Colab, provocando un <code>FileNotFoundError</code> que detenía la ejecución.</p>
            <p><strong>Solución:</strong> se envolvió la lectura en un bloque <code>try/except</code> que captura el error y genera un DataFrame de ejemplo para poder seguir trabajando sin que el programa se detenga.</p>
            <p><strong>Conclusión:</strong> el error muestra la importancia del manejo de excepciones al trabajar con archivos externos, cuya existencia no depende del programa. Usar try/except es aplicar programación defensiva: anticipar los posibles puntos de falla, algo especialmente relevante en flujos de análisis de datos.</p>

            <h4>2. Función recursiva incorrecta</h4>
            <p><strong>Problema:</strong> la función <code>factorial</code> no tenía condición de parada, así que se llamaba a sí misma indefinidamente hasta agotar la pila de llamadas (<code>RecursionError</code>).</p>
            <p><strong>Solución:</strong> se agregó el caso base <code>if n &lt;= 1: return 1</code>, que detiene la recursión y permite que las llamadas se resuelvan en cadena.</p>
            <p><strong>Conclusión:</strong> toda función recursiva necesita un caso base. El error es semántico (no sintáctico): el código es válido para el intérprete, pero su lógica está incompleta — cada llamada debe acercarse progresivamente a una condición de parada.</p>

            <h4>3. Gráfico de distribución con Matplotlib</h4>
            <p><strong>Problema:</strong> el histograma se generaba sin parámetros explícitos (como el número de bins), produciendo una visualización confusa, aunque sin error de ejecución.</p>
            <p><strong>Solución:</strong> se definieron explícitamente los bins (30), colores, título y etiquetas de los ejes.</p>
            <p><strong>Conclusión:</strong> definir bien estos parámetros no es solo estética — determina si el gráfico comunica correctamente la distribución o si oculta información relevante. Un código que funciona no siempre es un código correcto.</p>

            <h4>4. Web scraping con BeautifulSoup</h4>
            <p><strong>Problema:</strong> la solicitud <code>requests.get()</code> se hacía sin encabezado User-Agent, por lo que algunos servidores la rechazan o devuelven una respuesta distinta a la esperada.</p>
            <p><strong>Solución:</strong> se agregó un diccionario <code>headers</code> con un User-Agent válido, simulando una solicitud desde un navegador real.</p>
            <p><strong>Conclusión:</strong> esta limitación no depende del código sino del protocolo HTTP y las políticas de seguridad de los servidores. Incluir un User-Agent es una práctica estándar en web scraping, siempre respetando los términos de servicio de cada sitio.</p>

            <h4>5. Manipulación de arrays con NumPy</h4>
            <p><strong>Problema:</strong> un array de 10 elementos (<code>np.arange(10)</code>) se intentaba convertir en una matriz 3×3 (9 elementos), generando un <code>ValueError</code> por incompatibilidad de dimensiones.</p>
            <p><strong>Solución:</strong> se ajustó el arreglo a <code>np.arange(9)</code>, para que el total de elementos coincida con las dimensiones solicitadas.</p>
            <p><strong>Conclusión:</strong> un array es un bloque de memoria interpretado según ciertas dimensiones, y el número total de elementos debe conservarse en cualquier transformación de forma — un tipo de error muy común en computación científica y machine learning.</p>

            <h4>6. Uso de hilos con threading</h4>
            <p><strong>Problema:</strong> dos hilos incrementaban una misma variable compartida sin ningún mecanismo de sincronización, causando una condición de carrera (race condition) con resultados inconsistentes.</p>
            <p><strong>Solución:</strong> se usó un <code>threading.Lock()</code> para proteger la sección crítica con <code>with lock:</code>, garantizando que solo un hilo acceda a la variable a la vez.</p>
            <p><strong>Conclusión:</strong> la exclusión mutua que da un Lock es la base de la programación concurrente segura — sin ella, los resultados inconsistentes no siempre se detectan fácilmente.</p>

            <h4>7. API con requests</h4>
            <p><strong>Problema:</strong> el código no manejaba errores HTTP, así que si la API fallaba (error 404, 500, problemas de conexión) el programa fallaba sin dar información útil.</p>
            <p><strong>Solución:</strong> se envolvió la solicitud en <code>try/except</code>, se agregó un <code>timeout</code> y se usó <code>response.raise_for_status()</code> para detectar errores HTTP explícitamente.</p>
            <p><strong>Conclusión:</strong> un código robusto no debe asumir que la respuesta siempre será exitosa. Verificar el estado de la respuesta y capturar excepciones específicas es esencial en desarrollo profesional, donde los fallos de red son inevitables.</p>

            <h4>8. Clase con herencia en Python</h4>
            <p><strong>Problema:</strong> la clase <code>Perro</code> heredaba de <code>Animal</code> pero su <code>__init__</code> no llamaba al constructor de la clase base, así que el atributo <code>nombre</code> nunca se asignaba (<code>AttributeError</code>).</p>
            <p><strong>Solución:</strong> se agregó <code>super().__init__(nombre)</code> dentro del constructor de <code>Perro</code> para ejecutar correctamente la inicialización heredada.</p>
            <p><strong>Conclusión:</strong> cuando una subclase sobreescribe <code>__init__</code>, deja de heredar automáticamente el constructor de la clase base a menos que se invoque con <code>super()</code>. La herencia no es automática en todos sus aspectos.</p>

            <h4>9. Conexión a base de datos SQLite</h4>
            <p><strong>Problema:</strong> las sentencias de creación de tabla e inserción se ejecutaban sin llamar a <code>conn.commit()</code>, así que los cambios no se guardaban de forma permanente.</p>
            <p><strong>Solución:</strong> se agregó <code>conn.commit()</code> antes de cerrar la conexión, confirmando las transacciones.</p>
            <p><strong>Conclusión:</strong> las bases de datos funcionan bajo el principio de atomicidad — una transacción es todo o nada. Si nunca se confirma, la falla no es visible pero los datos sí se pierden, comprometiendo la integridad de la información.</p>

            <h4>10. Algoritmo de ordenamiento (Bubble Sort)</h4>
            <p><strong>Problema:</strong> el bucle interno siempre usaba <code>range(n-1)</code> sin reducirse en cada pasada externa, repitiendo comparaciones innecesarias sobre elementos ya ordenados — no era un error que impidiera el ordenamiento, sino de eficiencia.</p>
            <p><strong>Solución:</strong> se ajustó el rango interno a <code>range(0, n-i-1)</code>, reduciendo la cantidad de comparaciones en cada pasada.</p>
            <p><strong>Conclusión:</strong> aunque el algoritmo original sí ordenaba la lista, hay diferencia entre un error funcional y un error de eficiencia — este último afecta directamente el rendimiento, especialmente notorio en listas grandes.</p>
        `
    },

    "operadores-matematicos": {
        titulo: "Taller — Operadores en Python",
        archivos: [
            { nombre: "Los 30 ejercicios completos (.py)", url: "archivos/operadores-matematicos/operadores_matematicos.py" }
        ],
        codigo: [
            {
                id: "aritmeticos",
                etiqueta: "Aritméticos",
                archivo: "operadores_aritmeticos.py",
                contenido: `# 1. OPERADORES ARITMÉTICOS

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
print(f"Perímetro: {perimetro}")`
            },
            {
                id: "asignacion",
                etiqueta: "Asignación",
                archivo: "operadores_asignacion.py",
                contenido: `# 2. OPERADORES DE ASIGNACIÓN

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
print(f"{dolares} USD equivalen a {pesos} COP")`
            },
            {
                id: "comparacion",
                etiqueta: "Comparación",
                archivo: "operadores_comparacion.py",
                contenido: `# 3. OPERADORES DE COMPARACIÓN

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
print(f"El número está entre 10 y 20: {10 <= numero <= 20}")`
            },
            {
                id: "logicos",
                etiqueta: "Lógicos",
                archivo: "operadores_logicos.py",
                contenido: `# 4. OPERADORES LÓGICOS

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
    print("Acceso denegado")`
            },
            {
                id: "identidad",
                etiqueta: "Identidad",
                archivo: "operadores_identidad.py",
                contenido: `# 5. OPERADORES DE IDENTIDAD

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
print(f"dic1 == dic2: {dic1 == dic2}")   # True: mismo contenido`
            },
            {
                id: "pertenencia",
                etiqueta: "Pertenencia",
                archivo: "operadores_pertenencia.py",
                contenido: `# 6. OPERADORES DE PERTENENCIA

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
    print(f"{nombre} no está registrado.")`
            }
        ],
        html: `
            <p>Objetivo: aplicar los operadores de Python mediante ejercicios prácticos para reforzar su comprensión y uso — 5 ejercicios por cada uno de los 6 tipos de operador (30 en total).</p>
        `
    },

    "lab-documentos": {
        titulo: "Documentos del laboratorio de librerías",
        archivos: [
            { nombre: "Taller de exposición (enunciado, PDF)", url: "archivos/laboratorio-librerias/taller-exposicion.pdf" },
            { nombre: "Introducción a las librerías gráficas (PDF)", url: "archivos/laboratorio-librerias/introduccion-librerias-graficas.pdf" },
            { nombre: "Cuestionario de librerías (PDF)", url: "archivos/laboratorio-librerias/cuestionario-librerias.pdf" }
        ],
        html: `
            <p>El taller pidió investigar y exponer sobre 11 tipos de librerías para entornos gráficos en Python, en grupos de 1 a 2 personas, con una exposición de 15 minutos por grupo cubriendo: nombre, función, estructura, entornos de aplicación y un ejemplo gráfico de cada librería.</p>
            <p>Además del taller de exposición, se desarrolló una introducción general a las librerías gráficas (con foco en Pandas, Tkinter y Matplotlib/Seaborn/Plotly) y un cuestionario teórico de 10 preguntas sobre otras librerías: PyQt vs. Tkinter, Kivy, wxPython, PyGTK, PySide, Pygame, Flask junto con Flask-SocketIO, Dear PyGui y Matplotlib.</p>
        `
    },

    "lab-tkinter": {
        titulo: "Tkinter — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac1164202e0b3cdbcfe7f78" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac1164202e0b3cdbcfe7f78" loading="lazy" allowfullscreen title="Presentación Tkinter"></iframe></div>
            <h4>Función</h4>
            <p>Tkinter es la interfaz estándar de Python para el conjunto de herramientas gráficas Tk. Viene incluida con el propio lenguaje — Tk existía antes que Python, con su lenguaje Tcl, y Tkinter actúa de traductor entre Python y Tk — por lo que no requiere instalación adicional. Incluye los widgets esenciales: etiquetas, botones, campos de texto, listas y lienzos.</p>
            <h4>Estructura</h4>
            <p>Se organiza en torno a una ventana raíz (<code>Tk()</code>), dentro de la cual se colocan widgets organizados con gestores de geometría (<code>pack</code>, <code>grid</code> o <code>place</code>), y los eventos se atan con <code>.bind()</code> o el parámetro <code>command</code>.</p>
            <h4>Entornos de aplicación</h4>
            <p>Ideal para aplicaciones de escritorio pequeñas y prototipos, multiplataforma (Windows, macOS, Linux). Es muy práctico por lo fácil que es de aprender, aunque tiene limitaciones de diseño frente a librerías más robustas como PyQt.</p>
            <h4>Ejemplo</h4>
            <pre>import tkinter as tk

ventana = tk.Tk()
ventana.title("Mi primera app")

etiqueta = tk.Label(ventana, text="¡Hola, Tkinter!")
etiqueta.pack(pady=10)

boton = tk.Button(ventana, text="Saludar", command=lambda: print("¡Hola!"))
boton.pack()

ventana.mainloop()</pre>
        `
    },

    "lab-openpyxl": {
        titulo: "OpenPyxl — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac1317a64ab0533f89d9a0a" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac1317a64ab0533f89d9a0a" loading="lazy" allowfullscreen title="Presentación OpenPyxl"></iframe></div>
            <h4>Función</h4>
            <p>OpenPyxl permite leer, escribir y modificar archivos de Excel (.xlsx) sin necesidad de tener Excel instalado: crea hojas, celdas, fórmulas, formatos, gráficos y filtros de forma totalmente programática.</p>
            <h4>Estructura</h4>
            <p>Se trabaja con un objeto <code>Workbook</code> que contiene una o más hojas (<code>Worksheet</code>); cada hoja se accede por celdas (<code>ws["A1"]</code> o <code>ws.cell(row=1, column=1)</code>), y los cambios se guardan con <code>wb.save()</code>.</p>
            <h4>Entornos de aplicación</h4>
            <p>Automatización de reportes e informes administrativos, procesamiento de datos empresariales. No tiene interfaz gráfica propia — se usa de forma programática, normalmente integrado en scripts o backends que generan archivos para que otros abran en Excel.</p>
            <h4>Ejemplo</h4>
            <pre>from openpyxl import Workbook

wb = Workbook()
ws = wb.active
ws.title = "Ventas"

ws["A1"] = "Producto"
ws["B1"] = "Total"
ws.append(["Teclado", 120000])

wb.save("reporte.xlsx")</pre>
        `
    },

    "lab-pyside": {
        titulo: "PySide — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac118e6b08e973f9fcdd6ce" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac118e6b08e973f9fcdd6ce" loading="lazy" allowfullscreen title="Presentación PySide"></iframe></div>
            <h4>Función</h4>
            <p>PySide es el conjunto oficial de enlaces de Qt para Python, conocido hoy como Qt for Python. Permite crear interfaces modernas con una colección amplia de widgets, además de herramientas de multimedia, redes y bases de datos.</p>
            <h4>Estructura</h4>
            <p>Se organiza alrededor de una <code>QApplication</code>, ventanas principales (<code>QMainWindow</code> o <code>QWidget</code>) y widgets organizados con layouts (<code>QVBoxLayout</code>, <code>QHBoxLayout</code>); los eventos se manejan conectando señales (signals) a funciones (slots).</p>
            <h4>Entornos de aplicación</h4>
            <p>Aplicaciones de escritorio profesionales y multiplataforma. Se distribuye bajo licencia LGPL, lo cual es importante: permite usar la librería en software comercial sin tener que liberar el código fuente propio, siempre que se enlace de forma dinámica.</p>
            <h4>Ejemplo</h4>
            <pre>from PySide6.QtWidgets import QApplication, QPushButton

app = QApplication([])
boton = QPushButton("¡Hola, PySide!")
boton.clicked.connect(lambda: print("Botón presionado"))
boton.show()
app.exec()</pre>
        `
    },

    "lab-tensorflow": {
        titulo: "TensorFlow — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac119c5654110babdeec5a1" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac119c5654110babdeec5a1" loading="lazy" allowfullscreen title="Presentación TensorFlow"></iframe></div>
            <h4>Función</h4>
            <p>TensorFlow es el framework de código abierto de Google para machine learning y deep learning: construir, entrenar y desplegar modelos de redes neuronales. No es una librería gráfica tradicional, pero incluye TensorBoard, una herramienta para visualizar el entrenamiento (curvas de pérdida y precisión, arquitectura de la red).</p>
            <h4>Estructura</h4>
            <p>Trabaja con tensores (arreglos multidimensionales) y un grafo de operaciones. Con la API de alto nivel Keras, los modelos se definen por capas, de forma secuencial o funcional.</p>
            <h4>Entornos de aplicación</h4>
            <p>Investigación y producción en ciencia de datos, visión por computador y procesamiento de lenguaje natural. Corre en CPU, GPU y TPU, y se integra con Python además de tener versiones para JavaScript y dispositivos móviles.</p>
            <h4>Ejemplo</h4>
            <pre>import tensorflow as tf

modelo = tf.keras.Sequential([
    tf.keras.layers.Dense(16, activation="relu", input_shape=(4,)),
    tf.keras.layers.Dense(1, activation="sigmoid")
])
modelo.compile(optimizer="adam", loss="binary_crossentropy")</pre>
        `
    },

    "lab-kivy": {
        titulo: "Kivy — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac11a86654110babdef4de3" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac11a86654110babdef4de3" loading="lazy" allowfullscreen title="Presentación Kivy"></iframe></div>
            <h4>Función</h4>
            <p>Kivy es un framework pensado para crear aplicaciones con interfaces táctiles. Es la herramienta apropiada para apps móviles en Android e iOS, con la posibilidad de usar el mismo código en Windows, macOS y Linux. Es de código abierto.</p>
            <h4>Estructura</h4>
            <p>Dibuja sus propios widgets con aceleración gráfica mediante OpenGL ES, lo que facilita animaciones fluidas. Cuenta con su propio lenguaje de diseño, llamado KV, que separa la interfaz de la lógica de la aplicación.</p>
            <h4>Entornos de aplicación</h4>
            <p>Aplicaciones móviles táctiles, juegos sencillos, kioscos interactivos y aplicaciones educativas que necesitan una interfaz moderna con animaciones.</p>
            <h4>Ejemplo</h4>
            <pre>from kivy.app import App
from kivy.uix.button import Button

class MiApp(App):
    def build(self):
        return Button(text="¡Hola, Kivy!")

MiApp().run()</pre>
        `
    },

    "lab-pygtk": {
        titulo: "PyGTK — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac10c55edc6ca06b5379bf3" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac10c55edc6ca06b5379bf3" loading="lazy" allowfullscreen title="Presentación PyGTK"></iframe></div>
            <h4>Función</h4>
            <p>PyGTK es un enlace de Python para GTK 2, la biblioteca gráfica sobre la que se construyen muchos escritorios de Linux.</p>
            <h4>Estructura</h4>
            <p>Se construye anidando widgets dentro de contenedores (ventanas, cajas, botones) y conectando señales a funciones callback.</p>
            <h4>Entornos de aplicación</h4>
            <p>Compatible principalmente con entornos de escritorio basados en GTK — GNOME, Xfce, Cinnamon, MATE — aunque también puede ejecutarse en Windows y macOS con instalación adicional. Importante: PyGTK ya está obsoleto y solo funciona con Python 2; fue reemplazado por PyGObject, que da acceso a GTK 3 y GTK 4 desde Python, así que los proyectos nuevos deben usar PyGObject en su lugar.</p>
            <h4>Ejemplo (histórico, con PyGTK)</h4>
            <pre>import pygtk
pygtk.require('2.0')
import gtk

ventana = gtk.Window()
ventana.set_title("Hola PyGTK")
ventana.connect("destroy", gtk.main_quit)
ventana.show()
gtk.main()</pre>
        `
    },

    "lab-pandas": {
        titulo: "Pandas — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac11a546e8ae3eb3c954315" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac11a546e8ae3eb3c954315" loading="lazy" allowfullscreen title="Presentación Pandas"></iframe></div>
            <h4>Función</h4>
            <p>Pandas es una librería para manipular y analizar datos estructurados. Aunque no es una librería gráfica en sí, incluye métodos integrados para graficar directamente desde una tabla de datos — barras, líneas, dispersión, histogramas — apoyándose en Matplotlib, y esos gráficos se pueden personalizar en color, estilo y etiquetas.</p>
            <h4>Estructura</h4>
            <p>Se basa en dos estructuras principales: <code>Series</code> (una columna) y <code>DataFrame</code> (una tabla completa). Los datos se cargan desde CSV, Excel o SQL y se transforman con operaciones vectorizadas.</p>
            <h4>Entornos de aplicación</h4>
            <p>Análisis de datos, ciencia de datos, reportes y dashboards. Se integra muy bien dentro de Jupyter o Colab, y también dentro de ventanas de Tkinter o PyQt, mostrando sus gráficos como un widget más de la aplicación.</p>
            <h4>Ejemplo</h4>
            <pre>import pandas as pd

df = pd.DataFrame({"mes": ["Ene", "Feb", "Mar"], "ventas": [35100, 25001, 38000]})
df.plot(x="mes", y="ventas", kind="bar", title="Ventas por mes")</pre>
        `
    },

    "lab-customtkinter": {
        titulo: "CustomTkinter — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac10cb66e8ae3eb3c895074" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac10cb66e8ae3eb3c895074" loading="lazy" allowfullscreen title="Presentación CustomTkinter"></iframe></div>
            <h4>Función</h4>
            <p>CustomTkinter es una extensión moderna de Tkinter que añade widgets con apariencia actual — bordes redondeados, modo claro/oscuro, animaciones sutiles — manteniendo la simplicidad de Tkinter.</p>
            <h4>Estructura</h4>
            <p>Reemplaza los widgets clásicos de Tkinter con una API muy similar (<code>tk.Button</code> → <code>CTkButton</code>, <code>tk.Label</code> → <code>CTkLabel</code>), por lo que quien ya sabe Tkinter puede adoptarlo rápido. Soporta temas personalizables definidos en JSON.</p>
            <h4>Entornos de aplicación</h4>
            <p>Aplicaciones de escritorio que necesitan verse modernas sin pasar a un framework más pesado como PyQt o PySide. Es multiplataforma, igual que Tkinter.</p>
            <h4>Ejemplo</h4>
            <pre>import customtkinter as ctk

ctk.set_appearance_mode("dark")
ventana = ctk.CTk()
boton = ctk.CTkButton(ventana, text="¡Hola, CustomTkinter!")
boton.pack(pady=20)
ventana.mainloop()</pre>
        `
    },

    "lab-flask": {
        titulo: "Flask — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac11a8ab08e973f9fcf4dcb" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac11a8ab08e973f9fcf4dcb" loading="lazy" allowfullscreen title="Presentación Flask"></iframe></div>
            <h4>Función</h4>
            <p>Flask es el microframework web de Python: entrega la interfaz al navegador en HTML, CSS y JavaScript, trabajando por sí solo con el esquema de petición y respuesta (la página cambia solo cuando el usuario la solicita).</p>
            <h4>Estructura</h4>
            <p>Se definen rutas con decoradores (<code>@app.route</code>), cada una asociada a una función que devuelve HTML o una plantilla con Jinja2. Con Flask-SocketIO se agrega comunicación bidireccional en tiempo real mediante WebSockets: el servidor puede enviar eventos al navegador en cualquier instante, y viceversa, sin recargar la página.</p>
            <h4>Entornos de aplicación</h4>
            <p>Aplicaciones gráficas interactivas que funcionan en cualquier dispositivo con navegador — paneles de monitoreo que se actualizan solos, chats, tableros colaborativos, gráficos con datos en vivo, juegos en línea.</p>
            <h4>Ejemplo</h4>
            <pre>from flask import Flask

app = Flask(__name__)

@app.route("/")
def inicio():
    return "&lt;h1&gt;¡Hola, Flask!&lt;/h1&gt;"

app.run(debug=True)</pre>
        `
    },

    "lab-pyqt": {
        titulo: "PyQt — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Genially ↗", url: "https://view.genially.com/6ac1179a02e0b3cdbcff8585" } ],
        html: `
            <div class="lab-embed"><iframe src="https://view.genially.com/6ac1179a02e0b3cdbcff8585" loading="lazy" allowfullscreen title="Presentación PyQt"></iframe></div>
            <h4>Función</h4>
            <p>PyQt es un conjunto de enlaces de Python para el framework Qt. Posee una colección mucho más amplia y variada de widgets que Tkinter, además de herramientas para multimedia, redes, bases de datos y diseño visual con Qt Designer.</p>
            <h4>Estructura</h4>
            <p>Al igual que PySide (ambos son Qt for Python): una <code>QApplication</code>, ventanas y widgets organizados con layouts, y señales conectadas a slots. A diferencia de Tkinter, debe instalarse aparte y su curva de aprendizaje suele ser superior.</p>
            <h4>Entornos de aplicación</h4>
            <p>Creación de aplicaciones de escritorio profesionales y complejas, con una apariencia mucho más moderna y personalizable que Tkinter. Se distribuye bajo licencia GPL o comercial — a diferencia de la LGPL de PySide, esto obliga a publicar el código fuente propio o comprar la licencia en uso comercial.</p>
            <h4>Ejemplo</h4>
            <pre>from PyQt5.QtWidgets import QApplication, QLabel

app = QApplication([])
etiqueta = QLabel("¡Hola, PyQt!")
etiqueta.show()
app.exec_()</pre>
        `
    },

    "lab-flet": {
        titulo: "Flet — Laboratorio de librerías",
        enlaces: [ { texto: "Abrir presentación en Google Slides ↗", url: "https://docs.google.com/presentation/d/1AM3o0JgP9Netz8lPVkKWAlMqmvxqr8QCWVwZXD0AWiY/edit?usp=sharing" } ],
        html: `
            <div class="lab-embed"><iframe src="https://docs.google.com/presentation/d/1AM3o0JgP9Netz8lPVkKWAlMqmvxqr8QCWVwZXD0AWiY/embed?start=false&loop=false&delayms=3000" loading="lazy" allowfullscreen title="Presentación Flet"></iframe></div>
            <h4>Función</h4>
            <p>Flet permite construir aplicaciones web, de escritorio y móviles con un solo código Python, basado por debajo en Flutter (el motor de interfaces de Google) — sin tener que escribir Dart ni JavaScript.</p>
            <h4>Estructura</h4>
            <p>La aplicación se define como una función que recibe una <code>Page</code>, a la que se le agregan controles (<code>Text</code>, <code>ElevatedButton</code>, <code>TextField</code>...) con <code>page.add()</code>. Flet se encarga de renderizar esa interfaz como una app Flutter, ya sea en el navegador, como ejecutable de escritorio, o empaquetada para Android/iOS.</p>
            <h4>Entornos de aplicación</h4>
            <p>Ideal para crear una misma interfaz que corra en web, escritorio y móvil sin duplicar código — dashboards internos, herramientas y prototipos rápidos con una interfaz ya moderna de fábrica.</p>
            <h4>Ejemplo</h4>
            <pre>import flet as ft

def main(page: ft.Page):
    page.add(ft.Text("¡Hola, Flet!"))
    page.add(ft.ElevatedButton("Clic aquí"))

ft.app(target=main)</pre>
        `
    }

    /* ---------- Agrega el siguiente detalle aquí abajo, copiando este bloque ----------
    ,"id-unico-del-detalle": {
        titulo: "Título que aparece arriba de la ventana",
        enlaces: [ { texto: "Ver en Genially", url: "https://..." } ],
        archivos: [ { nombre: "Nombre del archivo", url: "archivos/carpeta/archivo.pdf" } ],
        html: `<p>Contenido en HTML...</p>`
    }
    */
};

/* ---------- 4. LABORATORIO (sección "Laboratorio de librerías") ---------- */
const LABORATORIO = [
    { nombre: "Tkinter", grupo: 1, tecnologias: ["GUI", "Estándar de Python"], resumen: "Interfaz estándar de Python para el toolkit gráfico Tk — simple y ya incluida con el lenguaje.", detalle: "lab-tkinter" },
    { nombre: "OpenPyxl", grupo: 2, tecnologias: ["Excel", "Automatización"], resumen: "Leer, escribir y dar formato a archivos de Excel (.xlsx) sin necesidad de tener Excel instalado.", detalle: "lab-openpyxl" },
    { nombre: "PySide", grupo: 3, tecnologias: ["Qt for Python", "LGPL"], resumen: "Enlace oficial de Qt para Python, con widgets avanzados y licencia LGPL.", detalle: "lab-pyside" },
    { nombre: "TensorFlow", grupo: 4, tecnologias: ["Machine Learning", "TensorBoard"], resumen: "Framework de Google para construir y entrenar modelos de machine learning.", detalle: "lab-tensorflow" },
    { nombre: "Kivy", grupo: 5, tecnologias: ["Táctil", "Multiplataforma"], resumen: "Framework para interfaces táctiles — ideal para apps móviles en Android e iOS.", detalle: "lab-kivy" },
    { nombre: "PyGTK", grupo: 6, tecnologias: ["GTK", "Linux"], resumen: "Enlace de Python para GTK 2, base de muchos escritorios de Linux (hoy reemplazado por PyGObject).", detalle: "lab-pygtk" },
    { nombre: "Pandas", grupo: 7, tecnologias: ["Datos", "Gráficos"], resumen: "Manipulación y análisis de datos, con métodos integrados para graficar directamente.", detalle: "lab-pandas" },
    { nombre: "CustomTkinter", grupo: 8, tecnologias: ["GUI moderna"], resumen: "Una capa sobre Tkinter con widgets de apariencia moderna y modo claro/oscuro.", detalle: "lab-customtkinter" },
    { nombre: "Flask", grupo: 9, tecnologias: ["Web", "WebSockets"], resumen: "Microframework web; con Flask-SocketIO permite interfaces interactivas en tiempo real.", detalle: "lab-flask" },
    { nombre: "PyQt", grupo: 10, tecnologias: ["Qt for Python", "GPL"], resumen: "Enlace de Python para Qt, con amplia variedad de widgets y apariencia profesional.", detalle: "lab-pyqt" },
    { nombre: "Flet", grupo: 11, tecnologias: ["Flutter", "Multiplataforma"], resumen: "Una app, un solo código Python — web, escritorio y móvil, basado en Flutter.", detalle: "lab-flet" }

    /* ---------- Agrega la siguiente librería aquí abajo, copiando este bloque ----------
    ,{ nombre: "Nombre", grupo: 12, tecnologias: ["Tag 1", "Tag 2"], resumen: "Descripción corta.", detalle: "lab-id-unico" }
    */
];

/* ---------- 5. PROGRESO (números manuales de la sección "Progreso") ---------- */
const PROGRESO_MANUAL = {
    avance: "100%",
    ultimaActividad: "Oct 2026"
};

/* ---------- 5. QUIZZES (agrupados por categoría, para no mezclar temas distintos) ---------- */
const QUIZZES = [
    {
        id: "compiladores",
        etiqueta: "Compiladores",
        preguntas: [
            {
                texto: "¿Cuál es la primera fase del proceso de compilación?",
                opciones: ["Generación de código", "Análisis léxico", "Optimización", "Análisis semántico"],
                correcta: 1,
                retro: "El análisis léxico es la primera fase: convierte el código fuente en una secuencia de tokens."
            },
            {
                texto: "¿Qué verifica el análisis semántico?",
                opciones: [
                    "Que el código tenga sangría correcta",
                    "Que los tokens formen una estructura gramatical válida",
                    "Que los tipos y significados del código sean coherentes",
                    "Que el código se ejecute más rápido"
                ],
                correcta: 2,
                retro: "El análisis semántico revisa coherencia de tipos, ámbitos y significado, más allá de la gramática."
            },
            {
                texto: "¿Cuál es la diferencia principal entre un compilador y un intérprete?",
                opciones: [
                    "El compilador traduce todo el programa antes de ejecutarlo; el intérprete lo ejecuta línea a línea",
                    "El intérprete es siempre más rápido que el compilador",
                    "No hay ninguna diferencia real",
                    "El compilador solo funciona con lenguajes de bajo nivel"
                ],
                correcta: 0,
                retro: "El compilador genera código ejecutable a partir de todo el programa; el intérprete ejecuta instrucción por instrucción."
            },
            {
                texto: "En el taller de análisis de código, ¿qué tipo de error era dividir 'total' entre la lista 'cantidades'?",
                opciones: ["Léxico", "Sintáctico", "Semántico", "De indentación"],
                correcta: 2,
                retro: "Es un error semántico: la estructura es válida, pero dividir un número entre una lista no tiene sentido lógico."
            },
            {
                texto: "¿Qué tarea realiza la fase de optimización de un compilador?",
                opciones: [
                    "Traduce el código a lenguaje máquina",
                    "Agrupa caracteres en tokens",
                    "Mejora el rendimiento del programa sin cambiar su resultado",
                    "Verifica que los tipos de datos sean compatibles"
                ],
                correcta: 2,
                retro: "La optimización reduce tiempo de ejecución, uso de memoria y consumo de energía, manteniendo el mismo resultado del programa."
            }
        ]
    },
    {
        id: "operadores-python",
        etiqueta: "Operadores en Python",
        preguntas: [
            {
                texto: "¿Qué operador se usa para verificar si dos variables apuntan al mismo objeto en memoria?",
                opciones: ["==", "is", "in", "%"],
                correcta: 1,
                retro: "'is' compara identidad (mismo objeto en memoria); '==' compara solo el valor/contenido."
            },
            {
                texto: "¿Cuál es el resultado de 7 % 2 en Python?",
                opciones: ["3.5", "1", "0", "3"],
                correcta: 1,
                retro: "El operador módulo (%) devuelve el residuo de la división: 7 dividido 2 da residuo 1."
            },
            {
                texto: "¿Qué hace el operador de asignación +=?",
                opciones: [
                    "Compara dos valores",
                    "Suma un valor a la variable y actualiza su valor en un solo paso",
                    "Verifica si un valor está dentro de una lista",
                    "Invierte el valor de un booleano"
                ],
                correcta: 1,
                retro: "x += 5 es equivalente a x = x + 5: suma y reasigna en una sola operación."
            },
            {
                texto: "¿Cuál expresión verifica correctamente que 'numero' esté entre 1 y 10?",
                opciones: [
                    "numero > 1 and numero < 10",
                    "numero > 1 in numero < 10",
                    "numero is 1 to 10",
                    "numero % 1 and 10"
                ],
                correcta: 0,
                retro: "El operador lógico 'and' combina dos comparaciones válidas; también podría escribirse como 1 < numero < 10."
            },
            {
                texto: "¿Qué devuelve la expresión \"a\" in \"casa\"?",
                opciones: ["True", "False", "Error", "None"],
                correcta: 0,
                retro: "El operador de pertenencia 'in' revisa si la letra 'a' aparece dentro del texto 'casa' — y sí aparece."
            }
        ]
    },
    {
        id: "google-colab",
        etiqueta: "Google Colab",
        preguntas: [
            {
                texto: "¿Qué es Google Colab?",
                opciones: [
                    "Un editor de texto local para C++",
                    "Un entorno gratuito de Google para escribir y ejecutar Python desde el navegador",
                    "Una base de datos en la nube",
                    "Un lenguaje de programación nuevo"
                ],
                correcta: 1,
                retro: "Colab es un entorno gratuito de Google basado en cuadernos de Jupyter; el código se ejecuta en una máquina virtual, no en el computador local."
            },
            {
                texto: "¿Qué fase del análisis se relaciona con el léxico en un cuaderno de Colab?",
                opciones: [
                    "Generación de código",
                    "Análisis léxico: dividir el código en tokens",
                    "Optimización",
                    "Ejecución del kernel"
                ],
                correcta: 1,
                retro: "El léxico corresponde a la primera fase: leer el código y agruparlo en tokens con significado (palabras reservadas, identificadores, literales, operadores)."
            },
            {
                texto: "¿Qué usa Python en lugar de llaves { } para delimitar bloques de código?",
                opciones: ["Paréntesis", "Comillas", "Identación (espacios)", "Punto y coma"],
                correcta: 2,
                retro: "Python usa la identación al inicio de la línea para indicar qué instrucciones pertenecen a un bloque — por eso un IndentationError es tan común."
            },
            {
                texto: "¿Qué estructura construye el analizador sintáctico después del análisis léxico?",
                opciones: [
                    "Un archivo ejecutable directo",
                    "Un árbol de sintaxis abstracta (AST)",
                    "Una tabla de símbolos vacía",
                    "Un archivo de texto plano"
                ],
                correcta: 1,
                retro: "El parser aplica la gramática del lenguaje y construye un AST, que luego se traduce a bytecode para que la máquina virtual de Python lo ejecute."
            },
            {
                texto: "¿Cuál es una ventaja real de Google Colab frente a instalar Python localmente?",
                opciones: [
                    "Funciona sin necesidad de conexión a internet",
                    "No requiere cuenta de Google",
                    "Da acceso a GPU/TPU sin depender del hardware del computador",
                    "Es más rápido que cualquier computador local en todos los casos"
                ],
                correcta: 2,
                retro: "Colab ofrece hardware acelerado (GPU/TPU) desde la nube, aunque limitado en la versión gratuita — a cambio, sí necesita internet y una cuenta de Google."
            }
        ]
    }

    /* ---------- Agrega la siguiente categoría de quiz aquí abajo, copiando este bloque ----------
    ,{
        id: "id-unico-categoria",
        etiqueta: "Nombre que se ve en la pestaña",
        preguntas: [
            {
                texto: "Texto de la pregunta",
                opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
                correcta: 0,   // índice (desde 0) de la opción correcta
                retro: "Explicación que se muestra después de responder"
            }
        ]
    }
    */
];
