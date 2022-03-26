require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const musicRoutes = require("./routes/music.routes");

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/api/music", musicRoutes);

const PORT = process.env.PORT || "4002";

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
