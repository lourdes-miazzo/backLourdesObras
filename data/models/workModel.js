import mongoose, { Schema } from "mongoose";

const workCollection = "Work"

const workSchema= new mongoose.Schema({
    title: {type: Schema.Types.String, required: true},
    size: {type: Schema.Types.String, required: true},
    year: {type: Schema.Types.String, required: true},
    style: {type: Schema.Types.String, required: true},
    mainPicture: {type: Schema.Types.String, required: true},
    pictures: {type: [Schema.Types.String], required: false}
})

const workModel= mongoose.model(workCollection, workSchema)
export default workModel