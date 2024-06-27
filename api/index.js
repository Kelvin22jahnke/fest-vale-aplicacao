import express from "express";
import usuarioRoutes from "./routes/usuario.js";
import loginRoutes from "./routes/login.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//Rotas da Api
app.use("/", usuarioRoutes);
app.use("/login", loginRoutes);

app.listen(3000);

//app.listen(8800, () => {
  //  console.log('Servidor rodando na porta 8800');
//});
