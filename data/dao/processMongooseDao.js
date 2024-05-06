import processModel from "../models/processModel.js"


class processMongooseDao{
    async getAll(){
        const document= await processModel.find()
        return document
    }
    async getOne(id){
        const document= await processModel.findById(id)
        return document
    }
    async postPro(body){
        const document= await processModel.create(body)
        return document
    }
}

export default processMongooseDao