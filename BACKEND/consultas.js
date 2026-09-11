const { pool } = require('./utils/dbConnection.js')


async function obtenerPost() {
    const result = await pool.query("SELECT * FROM POSTS")
    return result.rows
}



async function crearPost(titulo, img, descripcion, likes) {
    try {
        const result = await pool.query(
            `INSERT INTO posts (titulo, img, descripcion, likes)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [titulo, img, descripcion, likes]
        );

        return result.rows[0];

    } catch (error) {
        throw new Error("Error creando el post: " + error.message);
    }
}


async function modificarPost(titulo, img, descripcion,likes, id) {
  const values = [titulo, img, descripcion,likes, id];
  let consulta = "UPDATE posts SET titulo=$1, img=$2, descripcion =$3, likes=$4 WHERE id=$5";
  
  
   try {
        const result = await pool.query(consulta, values);

        if (result.rowCount === 0) {
            throw new Error("Post no encontrado");
        }

         return "Post actualizado";

    } catch (error) {
        return "Error: " + error.message;
    }
  
}


async function eliminarPost(id) {
    const values = [id];
    const consulta = "DELETE FROM posts WHERE id = $1";

    try {
        const result = await pool.query(consulta, values);

        if (result.rowCount === 0) {
            throw new Error("Post no encontrado");
        }

        return "Post eliminado";

    } catch (error) {
        return "Error: " + error.message;
    }
}


module.exports = { obtenerPost, crearPost,modificarPost,eliminarPost };

