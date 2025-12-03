import express, { Request, Response } from "express";
import initDB from "./config/db";
import { authRoutes } from "./modules/auth/auth.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { userRoute } from "./modules/user/user.routes";

const app = express();
// parser
app.use(express.json());

// initializing DB
initDB();

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome Todo Application");
});

//? users CRUD
app.use("/users", userRoute);

//? todo CRUD
app.use("/todos", todoRoutes);

//? auth routes
app.use("/auth", authRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path,
    });
});

export default app;
