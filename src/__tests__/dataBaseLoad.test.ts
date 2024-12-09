import sequelize from "../Config/database";
import { UserRepositoty } from "@Repositorys/UserRepository";

describe("Teste de Carga no Banco de Dados", () => {
  beforeAll(async () => {
    // Sincroniza o banco antes do teste
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    // Fecha a conexão após o teste
    await sequelize.close();
  });

  it("Deve inserir uma grande quantidade de registros no banco", async () => {
    const records = 100000; // Número de registros a serem inseridos
    const startTime = Date.now(); // Marca o início do teste

    // Loop para inserir os registros
    for (let i = 0; i < records; i++) {
      const email = `user${i}@example.com`;
      const passwordHash = `hashedpassword${i}`;
      await UserRepositoty.createUser(email, passwordHash);
    }

    const endTime = Date.now(); // Marca o fim do teste
    console.log(
      `Inseridos ${records} registros em ${(endTime - startTime) / 1000}s`
    );

    expect(true).toBe(true); // Apenas valida que o processo foi concluído
  });
});
