import express, { Request, Response } from "express";
import config from "./config";

const app = express();
const port = config.port;
// parser
app.use(express.json());

// initializing DB

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome Todo Application");
});

app.post("/users", async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
