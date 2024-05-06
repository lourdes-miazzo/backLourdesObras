import { Router } from "express";
import { getAllText, getOneText, postText, deleteText } from "../controller/textController.js";

const textRoute= Router()

textRoute.get("/", getAllText)
textRoute.get("/:id", getOneText)
textRoute.post("/", postText)
textRoute.delete("/:id", deleteText)
export default textRoute