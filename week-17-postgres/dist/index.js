"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neon-db_owner:b5duOia1xwhB@ep-royal-snow-a5ip9dmv.us-east-2.aws.neon.tech/neon-db?sslmode=require");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        pgClient
            .connect()
            .then(() => {
            console.log("Connected to Postgres");
        })
            .catch((err) => {
            console.error("Error connecting to Postgres", err);
        });
        // create a table
        yield pgClient.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    )
  `);
        // insert a row
        yield pgClient.query(`
    INSERT INTO users (name) VALUES ('Alice')
  `);
        // select all rows
        const { rows } = yield pgClient.query(`
    SELECT * FROM users
  `);
        console.log("Rows:", rows);
    });
}
main();
