
/**
 * 这里探讨原型和原型链
 * */

/**
 * person 的 __proto__属性就是这个对象的原型对象,
 * Person.prototype 也是person对象的原型对象
 * 或者也可以通过Object.getPrototypeOf(person)
 * 只有函数对象才有prototype属性
 * */
function Person(){
}
var person = new Person();
console.log(person.__proto__);
console.log(Person.prototype);
console.log(Person.prototype ===person.__proto__); //true
console.log(Object.getPrototypeOf(person) === Person.prototype)//true




/**
 * 这里访问person1.name，它会从person1里面找name属性，发现没有，它就会去原型对象里面找了,
 * 原型对象里没有的话就去原型对象的原型对象里去找了
 * */
function Person(){
}
Person.prototype.name = 'May';
console.log(person);
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // May
console.log(person2.name) // May



/**
 * person.__proto__是person的原型对象，person.__proto__.constructor是指向的创建person对象的构造器就是那个function Person(){}
 * 但是如果运行person.constructor发现person里面没有constructor属性，于是就去person的原型对象里面去找constructor属性,这也就是以下两个为ture的原因
 *
 *
 * */
function Person() {
}
var person = new Person();
console.log(Person.prototype.constructor);
console.log(Person === Person.prototype.constructor);//true
console.log(person.constructor === Person.prototype.constructor);//true
console.log(person.constructor === person.__proto__.constructor);//true


/**
 * 关于instanceof
 * 当a instanoeof A 是ture的时候，本质上就是说，a.__proto__ === A.prototype
 *
 * */
function Person() {
}
var person = new Person();
console.log(person instanceof Person);


/**
 * 关于原型对象的原型对象
 * person.__proto__.__proto__发现它的constructor属性是ƒ Object(),
 * 说明person.__proto__是Object创建出来的对象.
 *
 *
 *
 * */
function Person() {
}
var person = new Person();
console.log(person.__proto__.__proto__);
console.log(person.__proto__.__proto__ === Object.prototype);//true
console.log(person.__proto__ instanceof Object );//true


/**
 * 关于Function的原型对象,Function是一个特殊的对象，在Function中 Function.__proto__ === Function.prototype
 * 对于Function 来讲， 它一个内置对象，是运行前就已经存在的东西.
 * 一切对象有一个总得原型对象 就是本例中的 person.__proto__.__proto__. 它是Object.prototype
 * Object 根据这个对象(Object.prototype)创建了 person对象的原型对象, person.__proto__,
 * Object 根据这个对象(Object.prototype)创建了 Function对象的原型对象,Function.__proto__,Function.prototype__
 * 然后Function根据Person的原型对象创建了Person, 但是Person的原型对象和Function的原型对象是相等的
 *
 * */

console.log(Function.__proto__);//ƒ () { [native code] }
console.log(Function.__proto__.__proto__);//constructor属性指向Object
console.log(Function.__proto__ === Function.prototype);//ture

function Person() {
}
var person = new Person();
console.log(Person.__proto__);//ƒ () { [native code] }
console.log(Person.__proto__.__proto__); //constructor属性指向Object
console.log(Person.prototype === Person.__proto__);//false
console.log(Person.__proto__ === Function.__proto__);
console.log(Function.prototype === Person.__proto__);
console.log(Function.prototype.__proto__ === Person.prototype.__proto__);
console.log(Function.__proto__.__proto__ === Person.prototype.__proto__);




