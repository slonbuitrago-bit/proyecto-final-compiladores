# Proyecto — Compiladores

Sitio del curso de Compiladores. Reúne temas, actividades, ruta de aprendizaje, quiz y progreso, y queda preparado para agregar el video final.

## Estructura
```
index.html
css/estilos.css
js/contenido.js   ← el único archivo que editas cada clase
js/script.js      ← la lógica del sitio (no hace falta tocarlo)
archivos/         ← PDFs y código originales de cada actividad
```

## Cómo agregar contenido cada clase (lo importante)
Todo el contenido del curso vive en **`js/contenido.js`**. Es el único archivo que necesitas abrir semana a semana:

- **Un tema nuevo:** agrega un bloque al arreglo `TEMAS` (copia el ejemplo comentado al final del arreglo).
- **Un trabajo nuevo:** agrega un bloque al arreglo `TRABAJOS`. Si quieres que tenga una ventana de detalle (preguntas largas, código, etc.), dale un `detalle: "id-que-inventes"` y crea esa misma clave dentro de `DETALLES`.
- **Archivos originales (PDF, .py, etc.):** colócalos dentro de `archivos/<nombre-de-la-actividad>/` y enlázalos desde `archivos` en `DETALLES`.
- **Enlaces a Genially u otras herramientas:** agrégalos en `enlaces` dentro de `DETALLES`.
- Los contadores de la sección **Progreso** (temas y actividades) se calculan solos a partir de estos arreglos — solo actualiza manualmente `PROGRESO_MANUAL` (avance % y última actividad) al final del archivo.

No necesitas tocar `index.html`, `estilos.css` ni `script.js` para agregar contenido nuevo.

## Cómo ejecutarlo localmente
Es un proyecto 100% estático (HTML + CSS + JS, sin dependencias). No necesita Node.js, npm ni servidor:

- **Opción rápida:** hacer doble clic en `index.html` — abre directo en el navegador.
- **Opción recomendada:** usar la extensión "Live Server" de VS Code — clic derecho sobre `index.html` → "Open with Live Server".

## Cómo desplegarlo (gratis, con URL pública)
**GitHub Pages**
1. Subir esta carpeta a un repositorio de GitHub.
2. Ir a *Settings → Pages* → seleccionar la rama `main` y la carpeta raíz.
3. GitHub entrega una URL pública (`https://usuario.github.io/repositorio`).

**Netlify (alternativa igual de simple)**
1. Entrar a netlify.com y arrastrar la carpeta del proyecto a "Deploy".
2. Netlify entrega la URL pública al instante, sin necesidad de cuenta de GitHub.

No se necesita dominio propio ni base de datos: el proyecto es solo frontend.

## El video final
Reemplaza el bloque `.video-marcador` en la sección `#demo` de `index.html` por una etiqueta `<video>` o un `<iframe>` de YouTube/Drive cuando lo tengas grabado.

