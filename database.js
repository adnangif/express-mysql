import msyql from 'mysql2';

const pool = msyql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"notesdb",
}).promise()


async function getAllRows(){
    const [rows] = await pool.query("SELECT * FROM notes;");
    return rows;
}

