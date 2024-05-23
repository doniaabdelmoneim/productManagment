import mysql from "mysql2"

const db = mysql.createConnection('mysql://udtqgejj3fm3lcok:6pFU7DC9v8blaN2TO73K@buzx9apwjlgppklnweyc-mysql.services.clever-cloud.com:3306/buzx9apwjlgppklnweyc')
db.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("database connected")
        
    }

})

export default db