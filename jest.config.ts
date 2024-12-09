import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleNameMapper: {
    "^@Models/(.*)$": "<rootDir>/src/Models/$1",
    "^@Controllers/(.*)$": "<rootDir>/src/Controllers/$1",
    "^@Routes/(.*)$": "<rootDir>/src/Routes/$1",
    "^@Config/(.*)$": "<rootDir>/src/Config/$1",
    "^@Services/(.*)$": "<rootDir>/src/Services/$1",
    "^@Utils/(.*)$": "<rootDir>/src/Utils/$1",
    "^@Middlewares/(.*)$": "<rootDir>/src/Middlewares/$1",
    "^@Repositorys/(.*)$": "<rootDir>/src/Repositorys/$1", // Mapeamento corrigido para Repositorys
    "^@Querys/(.*)$": "<rootDir>/src/Querys/$1",
  },
};

export default config;
