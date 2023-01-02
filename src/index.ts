import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Home1");
});

app.listen(5000, () => console.log("Running on port 5000"));
