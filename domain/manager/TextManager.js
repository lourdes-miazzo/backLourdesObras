import textMongooseDao from "../../data/dao/textMongooseDao.js"

class TextManager{
    constructor(){
        this.dao= new textMongooseDao()
    }
    async getTexts(){
        return this.dao.getTexts()
    }
    async getOneText(id){
        return this.dao.getOneText(id)
    }
    async postNewText(data){
        return this.dao.postNewText(data)
    }
    async deleteOneText(id){
        return this.dao.deleteOneText(id)
    }
}

export default TextManager