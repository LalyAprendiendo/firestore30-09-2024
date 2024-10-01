import express, { json } from "express";
import Users from "./controllers/users";

const app = express();

app.use(json());

app.get("/users", Users.getAll);
app.post("/users", Users.create);

export default app;
