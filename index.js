const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//connect mysql database
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'e_commerce',
    port:3306
});

//check database connection
db.connect(err => {
    if(err){console.log('Data Base Not Connected');}
    console.log('Data Base Connected');
})

// get all data 
app.get('/product',(req,res)=>{
    //console.log('Get all product');
    let qrr = `select * from product`;
    db.query(qrr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'All users Data',
                data:results
            });
        };
    });
});

// get data by id
app.get('/product/:id',(req,res)=>{

    let qrId = req.params.id;
    let qr = `select * from product where id = ${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'Get by id',
                data:results
            });
        };
    });
})

// post data
app.post('/product',(req,res)=>{

    let name = req.body.name;
    let price = req.body.price;
    let size = req.body.size;
    let color = req.body.color;
    let qteStock = req.body.qteStock;
    let category = req.body.category;
    let image = req.body.image;

    let qr= `insert into product(name,price,size,color,qteStock,category,image) values ('${name}','${price}','${size}','${color}','${qteStock}','${category}','${image}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'inserted',
                data:results
            });
        };

    });
});


// update data
app.put('/product/:id',(req,res)=>{

    let uId = req.params.id;
    let id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    let size = req.body.size;
    let color = req.body.color;
    let qteStock = req.body.qteStock;
    let category = req.body.category;
    let image = req.body.image;

    let qr= `update product set name="${name}" , price="${price}" , size="${size}" , color="${color}" , qteStock="${qteStock}" , category="${category}" , image="${image}" where id= ${uId}`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'updated',
                data:results
            });
        };
    });

});

//delete data

app.delete('/product/:id',(req,res)=>{

    let uId = req.params.id;
    let qr =`delete from product where id = ${uId}`;

    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'deleted',
                data:results
            });
        };
    });
})

//-------Client -----------------

// get all data 
app.get('/client',(req,res)=>{
    //console.log('Get all client');
    let qrr = `select * from client`;
    db.query(qrr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'All users Data',
                data:results
            });
        };
    });
});

// get data by id
app.get('/client/:password',(req,res)=>{

    let qrId = req.params.id;
    let qr = `select * from client where password = ${password}`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'Get by id',
                data:results
            });
        };
    });
})

// post data
app.post('/client',(req,res)=>{

    let e_mail = req.body.e_mail;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    let qr= `insert into client(e_mail,password,first_name,last_name) values ('${e_mail}','${password}','${first_name}','${last_name}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'inserted',
                data:results
            });
        };

    });
});


// update data
app.put('/client/:password',(req,res)=>{

    let uId = req.params.password;
    let e_mail = req.body.e_mail;
    let password = req.body.password;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    let qr= `update client set 
            id = ${id} and
            e_mail=${e_mail} and
            password=${password} and
            first_name=${first_name} and
            last_name=${last_name}
            where password= ${uId}`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'updated',
                data:results
            });
        };
    });

});

//delete data

app.delete('/client/:password',(req,res)=>{

    let uId = req.params.password;
    let qr =`delete from client where password = ${uId}`;

    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'deleted',
                data:results
            });
        };
    });
});


//-------Commande -----------------
// get all data 
app.get('/commande',(req,res)=>{
    //console.log('Get all client');
    let qrr = `select * from commande`;
    db.query(qrr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'All users Data',
                data:results
            });
        };
    });
});


// get data by id
app.get('/commande/:id',(req,res)=>{

    let qrId = req.params.id;
    let qr = `select * from commande where id_produit = ${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'Get by id',
                data:results
            });
        };
    });
});

// post data
app.post('/commande',(req,res)=>{

    let idProduit = req.body.id_produit;
    let dateCommande = req.body.date_commande;
    let totalCommande = req.body.total_commande;

    let qr= `insert into commande(id_produit,date_commande,total_commande) values ('${idProduit}','${dateCommande}','${totalCommande}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'inserted',
                data:results
            });
        };

    });
});

// update data
app.put('/commande/:id',(req,res)=>{

    let uId = req.params.id;
    let idProduit = req.body.id_produit;
    let dateCommande = req.body.date_commande;
    let totalCommande = req.body.total_commande;


    let qr= `update commande set 
            id_produit = ${idProduit} and
            date_commande=${dateCommande} and
            total_commande=${totalCommande}
            where id_produit= ${uId}`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'updated',
                data:results
            });
        };
    });

});

//delete data

app.delete('/commande/:id',(req,res)=>{

    let uId = req.params.id;
    let qr =`delete from commande where id_produit = ${uId}`;

    db.query(qr,(err,results)=>{
        if(err){console.log(err,'err');}
        if(results.length>0){
            res.send({
                message : 'deleted',
                data:results
            });
        };
    });
});

app.listen(3000,()=>{
    console.log("Serveur is runing on port 3000");
})

