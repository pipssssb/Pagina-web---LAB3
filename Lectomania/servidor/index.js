import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Soy el server :p");
});

app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto 3000 ${port}`);
});
