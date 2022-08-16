import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "metabanana",
    database: "aletheia",
    entities: ['src/entities/**/*.ts'],
    logging: true,
    synchronize: true
})