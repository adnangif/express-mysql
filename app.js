import express from 'express';
import {getAllRows,getRecordById,createRow} from './database.js'

const app = express()


app.get("/notes", async (req,res) => {
    const persons = await getAllRows();
    res.status(201).send(persons);

})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})