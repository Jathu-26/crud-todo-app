const express = require("express");
const cors=require("cors");
require("dotenv").config()
const app = express();
app.use(cors({origin:process.env.FRONTEND_URL}));
app.use(express.json());

const router=require("./routes");
app.use("/api", router);

const port = 5000;

const connectDB = require("./connectDb");

const startServer = async () =>{
    await connectDB();
    app.listen(port,()=>{
        console.log(`Server is listening the port ${port}`)
    })
}

startServer();
