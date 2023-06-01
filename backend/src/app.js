import express from "express";
import routerTask from "./routes/task.js";
import cors from 'cors'
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions.js";


const specs=swaggerJSDoc(options)
const app=express();
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(routerTask)
app.use('/docs',swaggerUI.serve,swaggerUI.setup(specs))


export default app