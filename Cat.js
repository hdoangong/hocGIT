var mouse=require('./Mouse');
var chalk =require('chalk')
function  Cat(name){
    this.name=name;
    this.stomach=[];
}
Cat.prototype.eat=function(animal){
    if(animal instanceof mouse){
        this.stomach.push(animal);
    }
    else{
        throw new Error('Cat can only eat Mouse');
        
    }
    
}
Cat.prototype.sayhi=function(){
    console.log('xin chào tui là con Cat, tên của tui là: '+chalk.red(this.name));
}

module.exports=Cat;