import express, { Request, Response } from "express";
import initDB from "./config/db";
import { userRoute } from "./modules/user/user.routes";

const app = express();
// parser
app.use(express.json());

// initializing DB
initDB();

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome Todo Application");
});

// users CRUD
app.use("/users", userRoute);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path,
    });
});

export default app;
