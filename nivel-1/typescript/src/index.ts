import express, { response } from "express";
import { helloYara } from "./routes";

const app = express();

app.get("/", helloYara);

app.listen(3333);
