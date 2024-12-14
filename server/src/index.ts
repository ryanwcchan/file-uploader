import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})