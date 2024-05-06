import mongoose, { Schema } from "mongoose";

const textCollection = "Text"

const textSchema= new mongoose.Schema({
    title: {type: Schema.Types.String, required: true},
    parag: {type: [Schema.Types.String], required: true},
    author: {type: Schema.Types.String, required: true},
    picture: {type: Schema.Types.String, required: true},
    link: {type: Schema.Types.String, required: false}
})

const textModel= mongoose.model(textCollection, textSchema)
export default textModel