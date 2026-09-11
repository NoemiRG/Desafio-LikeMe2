🚀 Cómo Levantar el Proyecto
Sigue estos pasos para clonar y ejecutar el entorno de desarrollo localmente.

1. Clonar o descargar el repositorio

2. Configurar y ejecutar el Backend
Bash
cd backend
npm install
node index.js

3. Configurar y ejecutar el Frontend
Abre una segunda terminal en la raíz del proyecto y ejecuta:

Bash
cd frontend
npm install
npm run dev


# Example CRUD React with fetch

This is a simple example of a CRUD React application using fetch.

## Installation

```bash
npm i
```

## Usage

this project uses [Vite JS](https://vitejs.dev/), so you can use the following commands:

```bash
npm run dev
```

## Configuration

in the file `src\services\postService.js` you can change the API URL

```js
const URL_API = "http://localhost:3000/posts";
```

## External libraries

- [react-toastify](https://www.npmjs.com/package/react-toastify)

## Version History

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-toastify": "^9.1.1"
},
"devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.0"
}
```
