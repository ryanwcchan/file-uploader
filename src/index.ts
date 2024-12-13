// const express = require("express");
// const port = process.env.PORT || 3000;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port http://localhost:${port}`);
// });

import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})