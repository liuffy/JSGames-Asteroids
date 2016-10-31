// inherits

// We learned that implementing class inheritance using a Surrogate had the following step:

// 1. Define a Surrogate class
// 2. Set the prototype of the Surrogate (Surrogate.prototype = Animal.prototype)
// 3. Set Dog.prototype = new Surrogate()
// 4. Set Dog.prototype.construct = Dog*

//* Why is it necessary to set the prototype constructor?

// Without setting the prototype constructor, the copy is not an instance
// of the subclass (Dog), but rather the superClass (Animal).

  Function.prototype.inherits = function(superClass){
    function Surrogate(){}
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate(); // "this" points to the subclass
    this.prototype.constructor = this;
  }

  function Fruit(name){
    this.name = name;
  }

  Fruit.prototype.eat = function(){
    console.log("I'm going to eat a bunch of " + this.name + "!");
  }

/////////////////////////////
  function Banana(name){
    Fruit.call(this, name)
  }
  Banana.inherits(Fruit);

  Banana.prototype.peel = function(){
    console.log(this.name + " is getting peeled! ");
  }

  const nanners = new Banana("Nanners");
  const fruity = new Fruit ("Fruity")
  nanners.peel(); // Nanners is getting peeled!
  nanners.eat(); // I'm going to eat a bunch of Nanners!
  fruity.eat(); // I'm going to eat a bunch of Fruity!

  // fruity.peel(); // this wouldn't be a function
