import TextManager from "../../domain/manager/TextManager.js"

export const getAllText= async(req, res, next)=>{
    try{
        const manager= new TextManager()
        const allTexts= await manager.getTexts()
        if(!allTexts){
            return res.status(400).send({message: "Text list not Found"})
        }
        res.status(200).send({message: "Texts ok!", payload: allTexts})
    }
    catch(e){
        next(e)
    }
}
export const getOneText= async(req, res, next)=>{
    try{
        const {id}= req.params
        const manager= new TextManager()
        const oneText= await manager.getOneText(id)
        if(!oneText){
            return res.status(400).send({message:`Text with id: ${id} not found`})
        }
        res.status(200).send({message: `Text with id: ${id} found`, payload: oneText})
    }
    catch(e){
        next(e)
    }
}

export const postText= async(req,res,next)=>{
    try{
        const data= req.body
        console.log(data)
        const manager= new TextManager()
        const newText=  await manager.postNewText(data)
        res.status(201).send({message:"new text created", payload: newText}) 
    }
    catch(e){
        next(e)
    }
}

export const deleteText= async(req,res,next)=>{
    try{
        const {id}= req.params
        const manager= new TextManager()
        const deleteT= await manager.deleteOneText(id)
        res.status(200).send({message:"Text successfully deleted"})
    }
    catch(e){
        next(e)
    }
}