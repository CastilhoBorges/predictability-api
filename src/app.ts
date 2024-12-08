import app from "./app.config.js";
import sequelize from "@Config/database.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.APP_PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi bem-sucedida!");

    await sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas com sucesso!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao inicializar o servidor:", error);
  }
})();
