var Dog=require('./Dog');
var Cat=require('./Cat');
var dog=new Dog('cún cưng');
dog.sayhi();
var cat= new Cat ('mèo thúi');
cat.sayhi();
dog.eat(cat);
console.log(cat.name);