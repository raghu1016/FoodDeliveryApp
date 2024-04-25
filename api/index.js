import express from 'express';
import cors from 'cors';

import priceRoutes from "./routes/price.route.js"
import swaggerDocs from '../swagger.js'


const app = express();

app.use(cors());
app.use(express.json());


app.listen(3000,()=>{
    console.log('server is running!!!!!');
})

swaggerDocs(app,3000);

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/api",priceRoutes);