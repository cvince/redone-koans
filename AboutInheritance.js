function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

function Astronaut(age, hobby, mood){
	Muppet.call(this, age, hobby);
	this.mood = mood;
	
	this.spacewalk = function(){
		return age+" year old spacewalking";
	}
}

Astronaut.prototype = new Muppet();

this.muppet = new Muppet(2, "coding");
this.swedishChef = new SwedishChef(2, "cooking", "chillin");

this.astronaut = new Astronaut(22,"spacewalking", "chillin");
this.astronaut2 = new Astronaut(42,"music", "chillin");

console.log(this.swedishChef.cook());

console.log(this.astronaut.answerNanny());
console.log(this.astronaut.age);
console.log(this.astronaut.spacewalk());
console.log(this.astronaut2.hobby);



// describe("About inheritance", function() {
  // beforeEach(function(){
    // this.muppet = new Muppet(2, "coding");
	// this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  // });

  // it("should be able to call a method on the derived object", function() {
    // expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  // });

  // it("should be able to call a method on the base object", function() {
    // expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  // });

  // it("should set constructor parameters on the base object", function() {
    // expect(this.swedishChef.age).toEqual(2);
    // expect(this.swedishChef.hobby).toEqual("cooking");
  // });

  // it("should set constructor parameters on the derived object", function() {
    // expect(this.swedishChef.mood).toEqual("chillin");
  // });
// });

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function() {
    return this.trick;
  }
}

function Hacker(age, hobby, hack) {
	Muppet.call(this, age, hobby);
	this.hack = hack;
	this.doHack = function(){
		return this.hack+" hacking";
	}
}

//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget();

Hacker.prototype = Muppet.prototype.beget();


this.hacker = new Hacker(25, "always testing" , "koans");
otherHacker = new Hacker(15, "genius", "facebook");

console.log(this.hacker.hobby);
console.log(this.hacker.doHack());
console.log(otherHacker.doHack());
console.log(otherHacker.age+" year old "+otherHacker.hobby);

// describe("About Crockford's inheritance improvement", function() {
  // beforeEach(function(){
  // this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  // });

  // it("should be able to call a method on the derived object", function() {
    // expect(this.gonzo.doTrick()).toEqual("eat a tire");
  // });

  // it("should be able to call a method on the base object", function() {
    // expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
  // });

  // it("should set constructor parameters on the base object", function() {
    // expect(this.gonzo.age).toEqual(3);
    // expect(this.gonzo.hobby).toEqual("daredevil performer");
  // });

  // it("should set constructor parameters on the derived object", function() {
    // expect(this.gonzo.trick).toEqual("eat a tire");
  // });
// });
