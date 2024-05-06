import { Router } from "express";
import { getAllWork, getOneWork, postWork, deleteWork } from "../controller/workController.js";

const workRoute= Router()

workRoute.get("/", getAllWork)
workRoute.get("/:id", getOneWork)
workRoute.post("/", postWork)
workRoute.delete("/:id", deleteWork)

export default workRoute