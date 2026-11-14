# Carta digital para Marianny 💚

Una página romántica responsive hecha con HTML, CSS y JavaScript, lista para publicar con GitHub Pages.

## 1. Personalizar las cinco fotografías

Copia tus cinco fotografías a la carpeta `images/` y ponles exactamente estos nombres:

- `foto-1.jpg`
- `foto-2.jpg`
- `foto-3.jpg`
- `foto-4.jpg`
- `foto-5.jpg`

Puedes usar `.png` o `.webp`, pero si cambias la extensión también debes actualizar las rutas en el arreglo `memories` de `script.js`.

Recomendación: usa fotos verticales o cuadradas, comprimidas para web (idealmente menos de 1–2 MB cada una). No necesitas que sean profesionales: los recuerdos reales harán que la página sea mucho más especial.

## 2. Personalizar las descripciones

Abre `script.js` y busca el arreglo `memories`. Cada recuerdo tiene tres campos:

- `image`: ruta de la foto.
- `title`: título que verá Marianny.
- `text`: descripción personal.

Edita los títulos y textos para que correspondan a lo que vivieron juntos.

## 3. Música

El reproductor está preparado para un archivo `music/cancion.mp3`. Añade ahí un archivo de audio que tengas derecho a utilizar. El navegador solo intentará reproducirlo después de que Marianny toque el botón «Música».

Si quieres usar una canción comercial como «Aprender a Quererte» de Morat, no descargues ni subas una copia sin autorización. Puedes sustituir el reproductor por un enlace o inserción oficial de Spotify/YouTube, teniendo presente que la reproducción puede requerir la aplicación o iniciar sesión.

## 4. Probar localmente

Abre `index.html` en tu navegador. Para una prueba más fiel a GitHub Pages, puedes usar la extensión Live Server de Visual Studio Code o ejecutar un servidor local.

## 5. Publicar en GitHub Pages

1. Crea un repositorio público en GitHub, por ejemplo `carta-para-marianny`.
2. Sube `index.html`, `style.css`, `script.js` y las carpetas `images` y `music`.
3. En el repositorio entra en **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique el sitio. El enlace aparecerá en esa misma sección.

El enlace tendrá una forma parecida a:
`https://TU-USUARIO.github.io/carta-para-marianny/`

## Nota

Las fotografías de muestra no están incluidas: coloca tus propias imágenes con los nombres indicados. La página muestra un recuadro romántico de reserva mientras falta cada fotografía.
