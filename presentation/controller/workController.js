import WorkManager from "../../domain/manager/WorkManager.js"

export const getAllWork= async(req, res, next)=>{
    try{
        const manager= new WorkManager()
        const works= await manager.getAll()

        if(!works){
            return res.status(400).send({message: "works not found"})
        }
        res.status(200).send({message: "All Works found", payload: works})
    }
    catch(e){
        next(e)
    }
}
export const getOneWork= async(req, res, next)=>{
    try{
        const {id}= req.params
        const manager= new WorkManager()
        const oneWork= await manager.getOne(id)
        if(!oneWork){
            return res.status(400).send({message: `Work with id: ${id} not found`})
        }
        res.status(200).send({message: `Work with id: ${id} found`, payload: oneWork})
    }
    catch(e){
        next(e)
    }
}

export const postWork= async(req,res,next)=>{
    try{
        const data= req.body
        const manager= new WorkManager()
        const newWork=  await manager.postNewWork(data)
        res.status(201).send({message:"new work created", payload: newWork})
    }
    catch(e){
        next(e)
    }
}

export const deleteWork= async(req,res,next)=>{
    try{
        const {id}= req.params
        const manager= new WorkManager()
        const deleteW= await manager.deleteOneWork(id)
        res.status(200).send({message:"work successfully deleted"})
    }
    catch(e){
        next(e)
    }
}