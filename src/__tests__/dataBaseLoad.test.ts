import sequelize from "../Config/database";
import { UserRepositoty } from "@Repositorys/UserRepository";

describe("Teste de Carga no Banco de Dados", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("Deve inserir uma grande quantidade de registros no banco", async () => {
    const records = 100000;
    const startTime = Date.now(); 

    // Loop para inserir os registros
    for (let i = 0; i < records; i++) {
      const email = `user${i}@example.com`;
      const passwordHash = `hashedpassword${i}`;
      await UserRepositoty.createUser(email, passwordHash);
    }

    const endTime = Date.now(); 
    console.log(
      `Inseridos ${records} registros em ${(endTime - startTime) / 1000}s`
    );

    expect(true).toBe(true); // Apenas valida que o processo foi concluído
  });
});
