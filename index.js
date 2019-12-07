var Dog=require('./Dog');
var Cat=require('./Cat');
var Mouse=require('./Mouse');

var dog=new Dog('cún cưng');
dog.sayhi();

var cat= new Cat ('mèo thúi');
cat.sayhi();

var mouse=new Mouse('Chuột bạch');
mouse.sayhi();

dog.eat(cat);
cat.eat(mouse);
try {
    cat.eat(dog);    
} catch (error) {
    console.log('Err while cat eating a dog');
}


console.log(dog.stomach);
console.log(cat.stomach);