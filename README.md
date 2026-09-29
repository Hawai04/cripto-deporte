# Cripto Deporte

## Descripción

Cripto Deporte es una página web informativa dedicada a las noticias de fútbol. El proyecto permite consultar noticias deportivas, visualizar el detalle de cada noticia, agregar noticias a favoritos y utilizar un formulario de contacto con validaciones.

El proyecto fue desarrollado como parte de la entrega de un prototipo funcional utilizando HTML, CSS y JavaScript.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- LocalStorage
- Git
- GitHub

## Funcionalidades

### Noticias dinámicas

Las noticias se almacenan en el archivo `data/noticias.json` y son cargadas dinámicamente mediante JavaScript.

### Detalle de noticias

Cada noticia cuenta con un enlace de "Leer más", que permite visualizar la información detallada de la noticia.

### Favoritos

El usuario puede agregar noticias a favoritos. Estas se almacenan utilizando `localStorage`, permitiendo conservar la información en el navegador.

También es posible eliminar noticias de la sección de favoritos.

### Formulario de contacto

El formulario solicita:

- Nombre
- Correo electrónico
- Asunto
- Mensaje

El sistema verifica que los campos estén completos, comprueba el formato básico del correo electrónico y valida que el mensaje tenga como mínimo 10 caracteres.

## Estructura del proyecto

```text
Cripto Deporte
│
├── Index.html
├── estilos.css
├── README.md
│
├── data
│   └── noticias.json
│
├── js
│   └── app.js
│
└── img