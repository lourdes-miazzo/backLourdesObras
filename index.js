import app from "./app.js"
import {connectDB} from "./db.js"
import dotenv from 'dotenv'
dotenv.config()

connectDB()

import textRoute from "./presentation/routes/textRoute.js"
import workRoute from "./presentation/routes/workRoute.js"
import processRoute from "./presentation/routes/processRoute.js"

app.use("/textos", textRoute)
app.use("/obras", workRoute)
app.use("/procesos", processRoute)

app.listen(process.env.Node_Port, ()=>{
    console.log(`listening on port: ${process.env.Node_Port}`)
})