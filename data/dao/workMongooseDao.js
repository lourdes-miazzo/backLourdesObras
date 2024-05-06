import workModel from "../models/workModel.js"


class workMongooseDao{
    async getAll(){
        const document= await workModel.find()
        return document
    }
    async  getOne(id){
        const document= await workModel.findById(id)
        return document
    }  
    async postNewWork(data){
        const document= await workModel.create(data)
        return document
    }
    async deleteOneWork(id){
        const document= await workModel.findByIdAndDelete(id)
    }
}

export default workMongooseDao
