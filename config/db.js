const mongoose = require('mongoose');

const dbconnect = async () => {
    try{
        await mongoose.connect('mongodb+srv://lathabhavi3_db_user:gzjUM0Pn4vOx1cxW@cluster0.pkgwrfs.mongodb.net/Mern_Stack')
        console.log("db connected"); 
    }catch(err){
        console.log(err);
    }
}

module.exports = dbconnect