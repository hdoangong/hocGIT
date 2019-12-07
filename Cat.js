var chalk =require('chalk')
function  Cat(name){
    this.name=name;
    this.stomach=[];
}
Cat.prototype.eat=function(mouse){
    this.stomach.push(mouse);
}
Cat.prototype.sayhi=function(){
    console.log('xin chào tui là con Cat, tên của tui là: '+chalk.red(this.name));
}

module.exports=Cat;