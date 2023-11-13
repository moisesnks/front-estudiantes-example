# Frontend de Ejemplo para Estudiantes

Este es un proyecto de ejemplo para un frontend de una aplicación de gestión de estudiantes. Este frontend está construido en React y se comunica con un backend que proporciona datos sobre estudiantes y profesores.

## Configuración

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/moisesnks/front-estudiantes-example.git
   ```

2. Entra en la carpeta del proyecto:

   ```bash
   cd front-estudiantes-example
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

4. Copia el archivo `.env.example` a `.env` y configura las variables de entorno según tus necesidades:

   ```bash
   cp .env.example .env
   ```

   Asegúrate de configurar la variable `VITE_API_HOST` con la URL de tu backend.

5. Inicia la aplicación:

   ```bash
   npm run dev
   ```

6. Abre tu navegador y ve a `http://localhost:5173` para ver la aplicación en acción.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de carpetas:

- `src`: Contiene el código fuente de la aplicación.
  - `api`: Contiene funciones para realizar solicitudes a la API del backend.
  - `components`: Contiene componentes reutilizables de React.
  - `pages`: Contiene las páginas de la aplicación.
  - `routes`: Define las rutas de la aplicación.
  - `utils`: Contiene utilidades y funciones auxiliares.

## Uso

Este proyecto incluye una página de ejemplo llamada `Profesores` que muestra una lista de profesores obtenida del backend. Puedes modificar esta página o agregar más páginas y componentes según tus necesidades.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de crear un "pull request" con tus cambios. Estaremos encantados de revisarlos y fusionarlos si son apropiados.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para obtener más detalles.
