import ProcessManager from "../../domain/manager/ProcessManager.js"

export const getAllPro= async(req, res, next)=>{
    try {
        const manager= new ProcessManager()
        const all= await manager.getAll()
        res.status(200).send({message: `All process found`, payload: all})
    } catch(error) {
        next(error)
    }
}
export const getOnePro= async(req, res, next)=>{
    try {
        const {id}= req.params
        const manager= new ProcessManager()
        const onePro= await manager.getOne(id)
        res.status(200).send({message: `Process with id: ${id} found`, payload: onePro}) 
    } catch(error) {
        next(error)
    }
}
export const postPro= async(req, res, next)=>{
    try {
        const data= req.body
        const manager= new ProcessManager()
        const postOne= await manager.postPro(data)
        res.status(201).send({message: `Process created`, payload: postOne}) 
    } catch(error) {
        next(error)
    }
}