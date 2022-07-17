import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "127.0.0.1",         //se estiver rodando em docker, use o docker inspect para por o host do IPAdress do seu container
    port: 5432,
    username: "admin",
    password: "admin",
    database: "crud",
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    subscribers: [],
})

export default AppDataSource