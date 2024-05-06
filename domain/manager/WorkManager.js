import workMongooseDao from "../../data/dao/workMongooseDao.js"

class WorkManager{
    constructor(){
        this.dao = new workMongooseDao()
    }
    async getAll(){
        return this.dao.getAll()
    }
    async getOne(id){
        return this.dao.getOne(id)
    }
    async postNewWork(data){
        return this.dao.postNewWork(data)
    }
    async deleteOneWork(id){
        return this.dao.deleteOneWork(id)
    }
}

export default WorkManager