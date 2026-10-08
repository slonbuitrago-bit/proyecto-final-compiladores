document.addEventListener("DOMContentLoaded", () => {

    /* ============ UTILIDADES ============ */
    function escaparHtml(texto) {
        const div = document.createElement("div");
        div.textContent = texto;
        return div.innerHTML;
    }

    function localStorageGet(clave) {
        try { return window.localStorage.getItem(clave); }
        catch (e) { return null; }
    }
    function localStorageSet(clave, valor) {
        try { window.localStorage.setItem(clave, valor); }
        catch (e) { /* almacenamiento no disponible: se ignora */ }
    }

    /* Resaltado de sintaxis simple para Python, sin dependencias externas */
    function resaltarPython(codigo) {
        const PALABRAS_CLAVE = new Set([
            "for", "if", "elif", "else", "in", "while", "def", "return", "import", "from",
            "as", "class", "try", "except", "pass", "break", "continue", "and", "or", "not",
            "is", "None", "True", "False", "with", "lambda", "global"
        ]);
        const FUNCIONES_BASE = new Set([
            "print", "zip", "sum", "len", "range", "str", "int", "float", "input", "list",
            "dict", "set", "tuple", "sorted", "enumerate", "type"
        ]);

        const escapado = escaparHtml(codigo);
        const patron = /(#.*$)|((?:f|F)?"(?:[^"\\]|\\.)*"|(?:f|F)?'(?:[^'\\]|\\.)*')|(\b\d+\.?\d*\b)|(\b[A-Za-z_][A-Za-z0-9_]*\b)/gm;

        return escapado.replace(patron, (coincide, comentario, cadena, numero, palabra) => {
            if (comentario) return `<span class="tok-comentario">${comentario}</span>`;
            if (cadena) return `<span class="tok-cadena">${cadena}</span>`;
            if (numero) return `<span class="tok-numero">${numero}</span>`;
            if (palabra) {
                if (PALABRAS_CLAVE.has(palabra)) return `<span class="tok-clave">${palabra}</span>`;
                if (FUNCIONES_BASE.has(palabra)) return `<span class="tok-funcion">${palabra}</span>`;
                return palabra;
            }
            return coincide;
        });
    }

    /* ============ MODO CLARO / OSCURO ============ */
    const root = document.documentElement;
    const themeToggle = document.getElementById("themeToggle");

    const temaGuardado = localStorageGet("tema");
    if (temaGuardado) root.setAttribute("data-theme", temaGuardado);

    themeToggle.addEventListener("click", () => {
        const actual = root.getAttribute("data-theme");
        const nuevo = actual === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", nuevo);
        localStorageSet("tema", nuevo);
    });

    /* ============ MENÚ MÓVIL ============ */
    const menuToggle = document.getElementById("menuToggle");
    const menuPrincipal = document.getElementById("menuPrincipal");

    menuToggle.addEventListener("click", () => {
        const abierto = menuPrincipal.classList.toggle("abierto");
        menuToggle.setAttribute("aria-expanded", abierto);
    });

    menuPrincipal.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            menuPrincipal.classList.remove("abierto");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    /* ============ TERMINAL ANIMADA DEL HERO ============ */
    const terminalCuerpo = document.getElementById("terminalCuerpo");
    const lineasTerminal = [
        "$ compilando conocimiento del curso...",
        "✓ 5 temas · 7 trabajos documentados",
        "✓ laboratorio_librerias/ (11 librerías)",
        "✓ quiz_compiladores.json",
        "✓ quiz_operadores_python.json",
        "✓ quiz_google_colab.json",
        "✓ modo_claro_oscuro.css",
        "$ build completado ✓"
    ];

    if (terminalCuerpo && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        escribirTerminal(0);
    } else if (terminalCuerpo) {
        terminalCuerpo.innerHTML = lineasTerminal.map(l => `<div>${l}</div>`).join("");
    }

    function escribirTerminal(indice) {
        if (indice >= lineasTerminal.length) {
            const cursor = document.createElement("span");
            cursor.className = "terminal-cursor";
            terminalCuerpo.appendChild(cursor);
            return;
        }
        const linea = document.createElement("div");
        if (lineasTerminal[indice].startsWith("✓")) {
            linea.className = "terminal-linea-ok";
            linea.textContent = lineasTerminal[indice].replace("✓ ", "");
        } else {
            linea.textContent = lineasTerminal[indice];
        }
        terminalCuerpo.appendChild(linea);
        setTimeout(() => escribirTerminal(indice + 1), 420);
    }

    /* ============ RENDERIZAR TEMAS (desde contenido.js) ============ */
    const acordeonTemas = document.getElementById("acordeonTemas");

    function renderizarTemas() {
        let grupoAnterior = null;
        let contadorEnGrupo = 0;

        acordeonTemas.innerHTML = TEMAS.map((tema, i) => {
            let encabezadoGrupo = "";
            if (tema.grupo && tema.grupo !== grupoAnterior) {
                encabezadoGrupo = `<div class="temas-grupo-titulo">${escaparHtml(tema.grupo)}</div>`;
                grupoAnterior = tema.grupo;
                contadorEnGrupo = 0;
            }
            contadorEnGrupo++;

            return `
                ${encabezadoGrupo}
                <details class="tema" ${i === 0 ? "open" : ""}>
                    <summary>
                        <span class="tema-numero">${String(contadorEnGrupo).padStart(2, "0")}</span>
                        <span class="tema-titulo">${escaparHtml(tema.titulo)}</span>
                        <span class="tema-flecha" aria-hidden="true"></span>
                    </summary>
                    <div class="tema-contenido">${tema.contenido}</div>
                </details>
            `;
        }).join("");
    }
    renderizarTemas();

    /* ============ RENDERIZAR TRABAJOS (desde contenido.js) ============ */
    const listaTrabajos = document.getElementById("listaTrabajos");

    function renderizarTrabajos() {
        const tarjetasHtml = TRABAJOS.map(trabajo => `
            <article class="tarjeta-trabajo" data-categoria="${trabajo.categoria}">
                <span class="tarjeta-etiqueta">${escaparHtml(trabajo.etiqueta)}</span>
                <h3>${escaparHtml(trabajo.titulo)}</h3>
                <p>${escaparHtml(trabajo.resumen)}</p>
                <div class="tarjeta-tecnologias">
                    ${trabajo.tecnologias.map(t => `<span>${escaparHtml(t)}</span>`).join("")}
                </div>
                ${trabajo.detalle ? `<button class="tarjeta-boton" data-detalle="${trabajo.detalle}">Ver detalle completo</button>` : ""}
            </article>
        `).join("");

        const tarjetaVacia = `
            <article class="tarjeta-trabajo tarjeta-vacia" data-categoria="todos">
                <h3>Próxima actividad</h3>
                <p>Este espacio está listo para la siguiente actividad del curso.</p>
            </article>
        `;

        listaTrabajos.innerHTML = tarjetasHtml + tarjetaVacia;
    }
    renderizarTrabajos();

    /* ============ RENDERIZAR LABORATORIO DE LIBRERÍAS (desde contenido.js) ============ */
    const listaLaboratorio = document.getElementById("listaLaboratorio");

    function renderizarLaboratorio() {
        listaLaboratorio.innerHTML = LABORATORIO.map(lib => `
            <article class="tarjeta-trabajo">
                <span class="tarjeta-etiqueta">Grupo ${lib.grupo}</span>
                <h3>${escaparHtml(lib.nombre)}</h3>
                <p>${escaparHtml(lib.resumen)}</p>
                <div class="tarjeta-tecnologias">
                    ${lib.tecnologias.map(t => `<span>${escaparHtml(t)}</span>`).join("")}
                </div>
                <button class="tarjeta-boton" data-detalle="${lib.detalle}">Ver presentación y detalle</button>
            </article>
        `).join("");
    }
    renderizarLaboratorio();

    activarBotonesDetalle();

    /* ============ PROGRESO (calculado automáticamente) ============ */
    const elTemas = document.getElementById("progresoTemas");
    const elTrabajos = document.getElementById("progresoTrabajos");
    const elAvance = document.getElementById("progresoAvance");
    const elUltima = document.getElementById("progresoUltima");

    if (elTemas) elTemas.textContent = TEMAS.length;
    if (elTrabajos) elTrabajos.textContent = TRABAJOS.length;
    if (elAvance) elAvance.textContent = PROGRESO_MANUAL.avance;
    if (elUltima) elUltima.textContent = PROGRESO_MANUAL.ultimaActividad;

    /* ============ BUSCADOR DE TEMAS ============ */
    const buscadorTemas = document.getElementById("buscadorTemas");

    buscadorTemas.addEventListener("input", () => {
        const consulta = buscadorTemas.value.trim().toLowerCase();
        const nodos = Array.from(acordeonTemas.children);
        let grupoActual = null;
        let grupoTieneVisibles = false;

        nodos.forEach((nodo, i) => {
            if (nodo.classList.contains("temas-grupo-titulo")) {
                if (grupoActual) grupoActual.style.display = grupoTieneVisibles ? "" : "none";
                grupoActual = nodo;
                grupoTieneVisibles = false;
                return;
            }
            const coincide = nodo.textContent.toLowerCase().includes(consulta);
            nodo.style.display = coincide ? "" : "none";
            if (coincide) grupoTieneVisibles = true;

            const esUltimo = i === nodos.length - 1;
            if (esUltimo && grupoActual) grupoActual.style.display = grupoTieneVisibles ? "" : "none";
        });
    });

    /* ============ FILTROS DE TRABAJOS ============ */
    const filtros = document.querySelectorAll("#filtrosTrabajos .filtro");

    filtros.forEach(filtro => {
        filtro.addEventListener("click", () => {
            filtros.forEach(f => f.classList.remove("activo"));
            filtro.classList.add("activo");
            const categoria = filtro.dataset.filtro;

            listaTrabajos.querySelectorAll(".tarjeta-trabajo").forEach(trabajo => {
                const coincide = categoria === "todos" || trabajo.dataset.categoria === categoria || trabajo.dataset.categoria === "todos";
                trabajo.style.display = coincide ? "" : "none";
            });
        });
    });

    /* ============ MODAL DE DETALLE DE TRABAJOS ============ */
    const modalDetalle = document.getElementById("modalDetalle");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalCuerpo = document.getElementById("modalCuerpo");
    const modalCerrar = document.getElementById("modalCerrar");

    function construirBloqueCodigo(codigo) {
        // "codigo" es un arreglo: [{ id, etiqueta, archivo, contenido }, ...]
        const tabsHtml = codigo.map((bloque, i) =>
            `<button class="codigo-tab ${i === 0 ? "activo" : ""}" data-tab="${bloque.id}">${escaparHtml(bloque.etiqueta)}</button>`
        ).join("");

        const panelesHtml = codigo.map((bloque, i) =>
            `<div id="panel-${bloque.id}" ${i === 0 ? "" : "hidden"}><pre>${resaltarPython(bloque.contenido)}</pre></div>`
        ).join("");

        return `
            <div class="codigo-tabs">${tabsHtml}</div>
            <div class="codigo-ventana">
                <div class="codigo-ventana-barra">
                    <span class="terminal-punto rojo"></span>
                    <span class="terminal-punto amarillo"></span>
                    <span class="terminal-punto verde"></span>
                    <span class="terminal-titulo" id="codigoNombreArchivo">${escaparHtml(codigo[0].archivo || "")}</span>
                </div>
                ${panelesHtml}
            </div>
        `;
    }

    function construirEnlacesYArchivos(info) {
        let bloque = "";
        if (info.enlaces && info.enlaces.length) {
            bloque += `<div class="modal-acciones">` + info.enlaces.map(e =>
                `<a class="boton boton-primario boton-chico" href="${e.url}" target="_blank" rel="noopener">${escaparHtml(e.texto)}</a>`
            ).join("") + `</div>`;
        }
        if (info.archivos && info.archivos.length) {
            bloque += `<div class="modal-archivos"><h4>Archivos originales</h4><ul class="archivos-lista">` +
                info.archivos.map((a, i) => {
                    const esCodigo = /\.(py|txt|js|html|css)$/i.test(a.url);

                    // El código ya se ve arriba con resaltado y pestañas: solo se ofrece descargar.
                    if (esCodigo) {
                        return `
                            <li>
                                <div class="archivo-fila">
                                    <span class="archivo-nombre">${escaparHtml(a.nombre)}</span>
                                    <div class="archivo-acciones">
                                        <a class="archivo-link archivo-descargar" href="${a.url}" download>Descargar</a>
                                    </div>
                                </div>
                            </li>
                        `;
                    }

                    // PDFs y otros archivos que no se muestran en ningún otro lado: sí llevan vista previa.
                    return `
                        <li>
                            <div class="archivo-fila">
                                <span class="archivo-nombre">${escaparHtml(a.nombre)}</span>
                                <div class="archivo-acciones">
                                    <button class="archivo-boton" data-url="${a.url}" data-preview-id="previa-${i}">Vista previa</button>
                                    <a class="archivo-link" href="${a.url}" target="_blank" rel="noopener">Pantalla completa ↗</a>
                                    <a class="archivo-link archivo-descargar" href="${a.url}" download>Descargar</a>
                                </div>
                            </div>
                            <div class="archivo-preview" id="previa-${i}" hidden></div>
                        </li>
                    `;
                }).join("") + `</ul></div>`;
        }
        return bloque;
    }

    function actualizarTamanoModal() {
        const hayPreviaAbierta = !!modalCuerpo.querySelector(".archivo-preview:not([hidden])");
        modalDetalle.classList.toggle("modal-expandido", hayPreviaAbierta);
    }

    function activarPreviaArchivos() {
        modalCuerpo.querySelectorAll(".archivo-boton").forEach(boton => {
            boton.addEventListener("click", async () => {
                const panel = modalCuerpo.querySelector(`#${boton.dataset.previewId}`);
                const yaAbierto = !panel.hidden;

                if (yaAbierto) {
                    panel.hidden = true;
                    boton.textContent = "Vista previa";
                    actualizarTamanoModal();
                    return;
                }

                panel.hidden = false;
                boton.textContent = "Ocultar vista previa";
                actualizarTamanoModal();

                if (panel.dataset.cargado) return; // ya se cargó antes, no repetir

                const url = boton.dataset.url;
                const esPdf = url.toLowerCase().endsWith(".pdf");

                if (esPdf) {
                    panel.innerHTML = `<iframe src="${url}" class="archivo-iframe" title="Vista previa PDF"></iframe>`;
                    panel.dataset.cargado = "1";
                } else {
                    panel.innerHTML = `<p class="archivo-cargando">Cargando…</p>`;
                    try {
                        const respuesta = await fetch(url);
                        if (!respuesta.ok) throw new Error("No se pudo leer el archivo");
                        const texto = await respuesta.text();
                        panel.innerHTML = `<pre>${resaltarPython(texto)}</pre>`;
                        panel.dataset.cargado = "1";
                    } catch (error) {
                        panel.innerHTML = `<p class="archivo-cargando">No se pudo cargar la vista previa aquí (esto pasa si abriste el sitio con doble clic en vez de Live Server). Usa el enlace de descarga.</p>`;
                    }
                }
            });
        });
    }

    function activarBotonesDetalle() {
        document.querySelectorAll("[data-detalle]").forEach(boton => {
            boton.addEventListener("click", () => {
                const info = DETALLES[boton.dataset.detalle];
                if (!info) return;

                modalTitulo.textContent = info.titulo;

                let cuerpo = "";
                if (info.codigo) cuerpo += construirBloqueCodigo(info.codigo);
                if (info.html) cuerpo += info.html;
                cuerpo += construirEnlacesYArchivos(info);

                modalCuerpo.innerHTML = cuerpo;
                activarPreviaArchivos();

                // Las fichas del laboratorio (presentaciones embebidas) necesitan más espacio
                modalDetalle.classList.toggle("modal-expandido", boton.dataset.detalle.startsWith("lab-"));

                const tabs = modalCuerpo.querySelectorAll(".codigo-tab");
                if (tabs.length) {
                    const nombreArchivo = modalCuerpo.querySelector("#codigoNombreArchivo");
                    const codigoArr = info.codigo;
                    tabs.forEach(tab => {
                        tab.addEventListener("click", () => {
                            tabs.forEach(t => t.classList.remove("activo"));
                            tab.classList.add("activo");
                            modalCuerpo.querySelectorAll(".codigo-ventana > div[id^='panel-']").forEach(p => p.hidden = true);
                            modalCuerpo.querySelector(`#panel-${tab.dataset.tab}`).hidden = false;
                            if (nombreArchivo) {
                                const bloque = codigoArr.find(b => b.id === tab.dataset.tab);
                                nombreArchivo.textContent = (bloque && bloque.archivo) || "";
                            }
                        });
                    });
                }

                modalDetalle.showModal();
            });
        });
    }

    modalCerrar.addEventListener("click", () => modalDetalle.close());
    modalDetalle.addEventListener("click", (e) => {
        if (e.target === modalDetalle) modalDetalle.close();
    });
    modalDetalle.addEventListener("close", () => {
        modalDetalle.classList.remove("modal-expandido");
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalDetalle.open) modalDetalle.close();
    });

    /* ============ QUIZ (por categorías, desde contenido.js) ============ */
    let categoriaActual = QUIZZES[0].id;
    let indicePregunta = 0;
    let aciertos = 0;

    const quizCategorias = document.getElementById("quizCategorias");
    const quizPregunta = document.getElementById("quizPregunta");
    const quizContador = document.getElementById("quizContador");
    const quizBarra = document.getElementById("quizBarra");
    const quizResultado = document.getElementById("quizResultado");
    const quizResultadoTitulo = document.getElementById("quizResultadoTitulo");
    const quizResultadoTexto = document.getElementById("quizResultadoTexto");
    const quizReiniciar = document.getElementById("quizReiniciar");

    function preguntasActuales() {
        return QUIZZES.find(q => q.id === categoriaActual).preguntas;
    }

    function renderizarCategorias() {
        quizCategorias.innerHTML = QUIZZES.map(q =>
            `<button class="quiz-categoria-tab ${q.id === categoriaActual ? "activo" : ""}" data-categoria="${q.id}">${escaparHtml(q.etiqueta)}</button>`
        ).join("");

        quizCategorias.querySelectorAll(".quiz-categoria-tab").forEach(boton => {
            boton.addEventListener("click", () => {
                if (boton.dataset.categoria === categoriaActual) return;
                categoriaActual = boton.dataset.categoria;
                indicePregunta = 0;
                aciertos = 0;
                quizPregunta.hidden = false;
                quizResultado.hidden = true;
                renderizarCategorias();
                renderizarPregunta();
            });
        });
    }

    function renderizarPregunta() {
        const preguntas = preguntasActuales();
        const p = preguntas[indicePregunta];
        quizContador.textContent = `Pregunta ${indicePregunta + 1} de ${preguntas.length}`;
        quizBarra.style.width = `${(indicePregunta / preguntas.length) * 100}%`;

        quizPregunta.innerHTML = "";
        const titulo = document.createElement("p");
        titulo.className = "quiz-pregunta-texto";
        titulo.textContent = p.texto;
        quizPregunta.appendChild(titulo);

        const opcionesCont = document.createElement("div");
        opcionesCont.className = "quiz-opciones";

        p.opciones.forEach((opcion, i) => {
            const boton = document.createElement("button");
            boton.className = "quiz-opcion";
            boton.textContent = opcion;
            boton.addEventListener("click", () => responder(i, boton, opcionesCont));
            opcionesCont.appendChild(boton);
        });

        quizPregunta.appendChild(opcionesCont);
    }

    function responder(seleccion, botonSeleccionado, contenedor) {
        const preguntas = preguntasActuales();
        const p = preguntas[indicePregunta];
        const botones = contenedor.querySelectorAll(".quiz-opcion");
        botones.forEach(b => b.disabled = true);

        botones[p.correcta].classList.add("correcta");
        if (seleccion !== p.correcta) {
            botonSeleccionado.classList.add("incorrecta");
        } else {
            aciertos++;
        }

        const retro = document.createElement("p");
        retro.style.marginTop = "16px";
        retro.style.fontSize = "14px";
        retro.style.color = "var(--texto-suave)";
        retro.textContent = p.retro;
        quizPregunta.appendChild(retro);

        setTimeout(() => {
            indicePregunta++;
            if (indicePregunta < preguntas.length) {
                renderizarPregunta();
            } else {
                mostrarResultado();
            }
        }, 1400);
    }

    function mostrarResultado() {
        const preguntas = preguntasActuales();
        quizPregunta.hidden = true;
        quizBarra.style.width = "100%";
        quizContador.textContent = "Quiz completado";

        const porcentaje = Math.round((aciertos / preguntas.length) * 100);
        quizResultadoTitulo.textContent = `${porcentaje}% de aciertos`;
        quizResultadoTexto.textContent = `Respondiste correctamente ${aciertos} de ${preguntas.length} preguntas.`;
        quizResultado.hidden = false;
    }

    quizReiniciar.addEventListener("click", () => {
        indicePregunta = 0;
        aciertos = 0;
        quizPregunta.hidden = false;
        quizResultado.hidden = true;
        renderizarPregunta();
    });

    renderizarCategorias();
    renderizarPregunta();
});
