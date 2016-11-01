const Util = {
  inherits (childClass, parentClass){
    function Surrogate(){ this.constructor = ChildClass};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  }
}

module.exports = Util;
