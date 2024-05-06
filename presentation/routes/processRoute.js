import { Router } from "express";
import { getAllPro, getOnePro, postPro} from "../controller/processController.js";

const processRoute= Router()

processRoute.get("/", getAllPro)
processRoute.get("/:id", getOnePro)
processRoute.post("/", postPro)

export default processRoute