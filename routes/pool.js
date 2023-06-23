var mysql=require('mysql')

var pool=mysql.createPool(
    {
        host:'sql.freedb.tech',
        port:3306,
        user:'freedb_rohit tomar',
        password:'EAhZ**P9qgWFW39',
        database:'freedb_studentinfo',
        multipleStatements:true,
        connectionLimit:100
    })
    module.exports=pool