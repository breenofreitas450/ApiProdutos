const express = require("express");
const router = express.Router();
//const Product = require("./ProductModel")

var DB ={
    products: [
        {
            id: 1,
            name: 'Coxinha',
            price: 2
        },
        {
            id: 2,
            name: 'Pão de Queijo',
            price: 5.5
        }
    ]
}  

router.get("/product", (req,res) =>{
    res.statusCode= 200;
    res.json(DB.products);
})

router.get("/product/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var product = DB.products.find(g => g.id == id);
        if(product != undefined){
            res.statusCode = 200;
            res.json(product);
        }else{
            res.sendStatus(404);
        }
    }
});

router.post("/product",(req, res) => { 
    var {name, price} = req;
    var id = DB.products.length + 1;
    if(name == undefined || price == undefined){
        res.sendStatus(400);
    }else{
        DB.products.push({
            id: id,
            name: name,
            price: price ,
        });
        res.sendStatus(200);
    }
})

router.delete("/product/:id",(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.products.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.products.splice(index,1);
            res.sendStatus(200);
        }
    }
});


module.exports = router;