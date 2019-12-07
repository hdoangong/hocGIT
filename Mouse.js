var chalk =require('chalk')
function  Mouse(name){
    this.name=name;
}

Mouse.prototype.sayhi=function(){
    console.log('xin chào tui là con Mouse, tên của tui là: '+chalk.yellow(this.name));
}

module.exports=Mouse;