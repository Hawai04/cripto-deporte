document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript funcionando correctamente");

    cargarNoticias();

});


function cargarNoticias() {

    fetch("data/noticias.json")
        .then(function (respuesta) {

            return respuesta.json();

        })
        .then(function (noticias) {

            console.log("Noticias cargadas:", noticias);

            mostrarNoticias(noticias);

            mostrarDetalles(noticias);

            mostrarFavoritos(noticias);

        })
        .catch(function (error) {

            console.error("Error al cargar las noticias:", error);

        });

}


/* =========================
   MOSTRAR NOTICIAS
========================= */

function mostrarNoticias(noticias) {

    var contenedor = document.querySelector(".noticias");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    noticias.forEach(function (noticia) {

        var tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";

        tarjeta.innerHTML =
            '<div class="imagen-noticia">' +
                noticia.icono +
            '</div>' +

            '<div class="contenido-tarjeta">' +

                '<span>' +
                    noticia.categoria +
                '</span>' +

                '<h3>' +
                    noticia.titulo +
                '</h3>' +

                '<p>' +
                    noticia.descripcion +
                '</p>' +

                '<a href="#detalle' + noticia.id + '">' +
                    'Leer más →' +
                '</a>' +

                '<br><br>' +

                '<button class="boton-favorito" onclick="agregarFavorito(' + noticia.id + ')">' +
                    '☆ Agregar a favoritos' +
                '</button>' +

            '</div>';

        contenedor.appendChild(tarjeta);

    });

}


/* =========================
   MOSTRAR DETALLES
========================= */

function mostrarDetalles(noticias) {

    var contenedor = document.getElementById("detalles-noticias");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    noticias.forEach(function (noticia) {

        var detalle = document.createElement("section");

        detalle.id = "detalle" + noticia.id;

        detalle.className = "detalle";

        detalle.innerHTML =
            '<div class="detalle-imagen">' +
                noticia.icono +
            '</div>' +

            '<div class="detalle-contenido">' +

                '<span>' +
                    noticia.categoria +
                '</span>' +

                '<h2>' +
                    noticia.titulo +
                '</h2>' +

                '<p class="fecha">' +
                    'Actualidad deportiva' +
                '</p>' +

                '<p>' +
                    noticia.detalle +
                '</p>' +

                '<a href="#noticias" class="volver">' +
                    '← Volver a noticias' +
                '</a>' +

            '</div>';

        contenedor.appendChild(detalle);

    });

}


/* =========================
   FAVORITOS
========================= */

function agregarFavorito(id) {

    var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.indexOf(id) === -1) {

        favoritos.push(id);

        localStorage.setItem("favoritos", JSON.stringify(favoritos));

        alert("Noticia agregada a favoritos");

    } else {

        alert("Esta noticia ya está en favoritos");

    }

    cargarNoticias();

}


function mostrarFavoritos(noticias) {

    var contenedor = document.getElementById("lista-favoritos");

    if (!contenedor) {
        return;
    }

    var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    contenedor.innerHTML = "";

    if (favoritos.length === 0) {

        contenedor.innerHTML =
            '<p class="sin-favoritos">' +
            'No tienes noticias favoritas todavía.' +
            '</p>';

        return;
    }

    favoritos.forEach(function (id) {

        noticias.forEach(function (noticia) {

            if (noticia.id === id) {

                var favorito = document.createElement("div");

                favorito.className = "favorito";

                favorito.innerHTML =
                    '<div class="favorito-icono">' +
                        noticia.icono +
                    '</div>' +

                    '<div class="favorito-contenido">' +

                        '<span>' +
                            noticia.categoria +
                        '</span>' +

                        '<h3>' +
                            noticia.titulo +
                        '</h3>' +

                        '<p>' +
                            noticia.descripcion +
                        '</p>' +

                        '<button onclick="eliminarFavorito(' + noticia.id + ')">' +
                            '❌ Quitar de favoritos' +
                        '</button>' +

                    '</div>';

                contenedor.appendChild(favorito);

            }

        });

    });

}


function eliminarFavorito(id) {

    var favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    favoritos = favoritos.filter(function (favorito) {

        return favorito !== id;

    });

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    cargarNoticias();

}


/* =========================
   VALIDACIÓN DEL FORMULARIO
========================= */

document.addEventListener("DOMContentLoaded", function () {

    var formulario = document.getElementById("formulario-contacto");

    if (formulario) {

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            var nombre = document.getElementById("nombre").value.trim();
            var correo = document.getElementById("correo").value.trim();
            var asunto = document.getElementById("asunto").value.trim();
            var mensaje = document.getElementById("mensaje").value.trim();

            var mensajeFormulario =
                document.getElementById("mensaje-formulario");


            if (nombre === "" ||
                correo === "" ||
                asunto === "" ||
                mensaje === "") {

                mensajeFormulario.textContent =
                    "Por favor, completa todos los campos.";

                mensajeFormulario.className = "error";

                return;
            }


            if (!correo.includes("@") || !correo.includes(".")) {

                mensajeFormulario.textContent =
                    "Por favor, ingresa un correo electrónico válido.";

                mensajeFormulario.className = "error";

                return;
            }


            if (mensaje.length < 10) {

                mensajeFormulario.textContent =
                    "El mensaje debe tener mínimo 10 caracteres.";

                mensajeFormulario.className = "error";

                return;
            }


            mensajeFormulario.textContent =
                "¡Mensaje enviado correctamente! Gracias por contactarnos.";

            mensajeFormulario.className = "exito";

            formulario.reset();

        });

    }

});