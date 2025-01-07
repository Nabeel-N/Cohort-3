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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // Correct: Call express() to create an app instance
app.use(express_1.default.json()); // Add middleware to parse JSON request bodies
// PostgreSQL client setup
const pgClient = new pg_1.Client({
    connectionString: "postgresql://neon-db_owner:b5duOia1xwhB@ep-royal-snow-a5ip9dmv.us-east-2.aws.neon.tech/neon-db?sslmode=require",
});
pgClient
    .connect()
    .then(() => {
    console.log("Connected to PostgreSQL database");
})
    .catch((err) => {
    console.error("Failed to connect to PostgreSQL database", err);
});
// Signup route
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1 ,$2 ,$3) RETURNING id;`;
        const response = yield pgClient.query(insertQuery, [username, email, password]);
        const userId = response.rows[0].id;
        const addressInsertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`;
        const addressInsertResponse = yield pgClient.query(addressInsertQuery, [userId, city, country, street, pincode]);
        res.json({
            message: "You have been signed UP"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error while signing UP"
        });
    }
}));
// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
