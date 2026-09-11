const express = require('express')
const cors = require('cors')
const { checkConnection, pool } = require('./utils/dbConnection')
const { obtenerPost,crearPost,modificarPost,eliminarPost } = require('./consultas.js')

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3000, async () => {
    console.log('Servidor 3000')
    const hora = await checkConnection()
    console.log('Hora de la base de datos:', hora)
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/posts", async (req, res) => {
    try {
        const posts = await obtenerPost()
        res.json(posts)
    } catch (error) {
        res.send("Error obteniendo post: " + error.message)
    }
})


app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;

    try {
        const result = await crearPost(titulo, img, descripcion, likes);
        res.json(result);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const response = await modificarPost(titulo, img, descripcion, likes, id);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const response = await eliminarPost(id);
        res.send(response);
    } catch (error) {
        res.send("Error eliminando post: " + error.message);
    }
});