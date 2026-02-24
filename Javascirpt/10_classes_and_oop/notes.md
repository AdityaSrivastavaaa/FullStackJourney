#javascript and classes 

##oop

##object 

-collection of properties and methods 
-toLowerCase

## why use OOP


## parts of OOP
object literal

-Constructor functions
-Prototypes
-Classes
-Instances(new,this)


## 4 Pillar 
Abstraction 
Encapsulation
Inheritance 
Polymorphism

1️⃣ Abstraction
👉 Meaning:

Abstraction means hiding complex implementation details and showing only the necessary features.

You use something without knowing how it works internally.

🔹 Real-life Example:

When you drive a car 🚗, you press the accelerator — you don’t know how the engine works internally.

✅ JavaScript Example:
class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {  // private method
    console.log("Engine ignition process...");
  }
}

const myCar = new Car();
myCar.start();
// Output:
// Engine ignition process...
// Car started

👉 User only calls start()
👉 The internal engine logic is hidden (#igniteEngine())

That’s abstraction.

2️⃣ Encapsulation
👉 Meaning:

Encapsulation means binding data and methods together and restricting direct access to some data.

We protect internal data using private variables.

🔹 Real-life Example:

A bank account 🏦
You cannot directly change your balance.
You must use deposit() or withdraw().

✅ JavaScript Example:
class BankAccount {
  #balance = 0;  // private property

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);

console.log(account.getBalance()); // 1000
// console.log(account.#balance); ❌ Error (cannot access private)

👉 #balance is protected
👉 Can’t modify directly
👉 Must use methods

That’s encapsulation.

3️⃣ Inheritance
👉 Meaning:

Inheritance means one class can use properties and methods of another class.

It promotes code reuse.

🔹 Real-life Example:

Dog 🐶 is an Animal
Cat 🐱 is an Animal

Both inherit common behavior like eat() and sleep().

✅ JavaScript Example:
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const myDog = new Dog();
myDog.eat();   // inherited method
myDog.bark();  // own method

👉 Dog inherits from Animal
👉 Can use eat()

That’s inheritance.

4️⃣ Polymorphism
👉 Meaning:

Polymorphism means same method name, different behavior.

"Poly" = many
"Morph" = forms

🔹 Real-life Example:

A person can be:

A father at home

An employee at office

A friend outside

Same person, different roles.

✅ JavaScript Example:
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
Output:
Dog barks
Cat meows

👉 Same method speak()
👉 Different behavior

That’s polymorphism.

🔥 Quick Comparison Table
Concept	           Purpose	           Key Idea
Abstraction	     Hide complexity	  Show only essentials
Encapsulation	 Protect data	      Private variables
Inheritance	     Reuse code	          extends keyword
Polymorphism	 Same method, different behavior	Method overriding
💡 Important Note (JavaScript Specific)

JavaScript is:

Prototype-based

Supports OOP using classes (ES6+)

Supports private fields using #
