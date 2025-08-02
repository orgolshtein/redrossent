import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import log from "@ajar/marker";

import crudRouter from "./routes/crud.router.mjs";

const { PORT, HOST } = process.env;

const app = express();

app.use(cors());

app.use("/unagibet", express.static("data"));

app.use("/src", express.static("src"));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/crud", crudRouter);

app.use("/", (_,res)=>{
    res.status(200).send(`<h1>Red Ross Entertainment Server</h1>`);
});

app.use("*", (_,res)=>{
    log.red("No path found. 404 status sent");
    res.status(404).send("Path not found");
});

app.listen(PORT, HOST, () => log.green(`Server started: http://${HOST}:${PORT}`));