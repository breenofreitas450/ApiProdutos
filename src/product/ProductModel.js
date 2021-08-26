const app = require('express');


module.exports = (
    function CreateDatabase(){
        var db ={
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
        return(db);
        console.log(db);
    }

);