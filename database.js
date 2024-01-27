import msyql from 'mysql2';
import dotenv from 'dotenv'


dotenv.config();

const pool = msyql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PW,
    database:process.env.MYSQL_DB,
}).promise()


async function getAllRows(){
    const [rows] = await pool.query("SELECT * FROM notes;");
    return rows;
}

async function getRecordById(id){
    const [rows] = await pool.query(`
    select * 
    from notes 
    where id=?
    ;`,[id])
    
    return rows;
}

async function createRow(first_name,last_name,age){
    const [res] = await pool.query(`
    INSERT INTO notes(first_name,last_name,age)
    VALUES
    (?,?,?);
    `,[first_name,last_name,age]);

    const cid = res.insertId;
    return getRecordById(cid);
}


// console.log(await createRow("32sd","sdscx",34));
// console.log(await getAllRows());

export {getAllRows, getRecordById, createRow}