import { Express } from "express";
import express from "express";
import data from "./data/data";
import { handleWords } from "./helper/handlewords";

export function initHttp(app: Express) {
    app.use(express.json());
    app.get("/test", (req, res) => {
        res.send("Hello World!");
    });
    app.post("/getwords", (req, res) => {
       const sendData=handleWords(data);
         res.send(sendData);
    });
}