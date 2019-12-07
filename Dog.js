var chalk =require('chalk')
function Dog(name){
    this.name=name;
    this.stomach=[];
}
Dog.prototype.eat=function(Cat){
    this.stomach.push(Cat);
}
Dog.prototype.sayhi=function(){
    console.log('xin chào tui là con Dog, tên của tui là: '+chalk.blue(this.name));
}

module.exports=Dog;