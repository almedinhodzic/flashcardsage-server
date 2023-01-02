import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import { config } from "dotenv";
import cors from "cors";

config();
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find();
  res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({ title: req.body.title });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => app.listen(PORT, () => console.log(`Running on port ${PORT}`)));
