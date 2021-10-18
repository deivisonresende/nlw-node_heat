import express from 'express';

const app = express();

app.post("/",(req,res)=> console.log("Hello world"))

app.listen(4000, ()=> console.log(`🚀Server is running on port 4000🚀`))