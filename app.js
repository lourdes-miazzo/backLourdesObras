import express from "express"
import morgan  from "morgan"
import cors from "cors"

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.get("/", (req, res)=>{
  res.setHeader("Access-Controll-Allow-Credentials", "true")
  res.send("Api is running...")
})
app.use(morgan("dev"))

export default app
