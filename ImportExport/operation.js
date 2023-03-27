const add = (a,b) =>{
return a+b;
};

const subtract = (a,b) =>{
    return a-b;
    };

const multiply = (a,b) =>{
        return a*b;
};

const name = "Adnan Ahmed";

// module.exports.add = add; Or
// module.exports.name = name; 
module.exports = {add,subtract,multiply,name};