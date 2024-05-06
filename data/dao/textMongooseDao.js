import textModel from "../models/textModel.js"


class textMongooseDao{
    async getTexts(){
        const document= await textModel.find()
        return document
    }
    async getOneText(id){
        const document= await textModel.findById(id)
        return document
    }  
    async postNewText(data){
        const document= await textModel.create(data)
        return document
    }
    async deleteOneText(id){
        const document= await textModel.findByIdAndDelete(id)
    }
}

export default textMongooseDao
