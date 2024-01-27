import express from 'express';

const app = express()


app.get("/notes", (req,res) => {
    res.send("Hello world!!")
})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})