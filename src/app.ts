import app from "./app.config";
import sequelize from "@Config/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.APP_PORT || 3001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi bem-sucedida!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao inicializar o servidor:", error);
  }
})();
