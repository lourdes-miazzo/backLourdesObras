import processMongooseDao from "../../data/dao/processMongooseDao.js"

class ProcessManager{
    constructor(){
        this.dao = new processMongooseDao()
    }
    async getAll(){
        return this.dao.getAll()
    }
    async getOne(id){
        return this.dao.getOne(id)
    }
    async postPro(body){
        return this.dao.postPro(body)
    }
}

export default ProcessManager