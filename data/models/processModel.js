import mongoose, { Schema } from "mongoose";

const processCollection= "Process"

const processSchema = new mongoose.Schema({
    title: {type: Schema.Types.String, required: true},
    mainPicture: {type: Schema.Types.String, required: true},
    pics: {type: [Schema.Types.String], required: true}
})

const processModel= mongoose.model(processCollection, processSchema)
export default processModel