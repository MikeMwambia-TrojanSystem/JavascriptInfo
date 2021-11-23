//Class inheritance is a way for one class to extend another class
//So we can create new functionality

class Animal {
    //Pass a name variable when initializing
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

let animal = new Animal('My animal');



//Rabbit example
class Rabbit extends Animal {
    hide () {
        alert(`${this.name} hides!`);
    }
    //Arrow functions have no super
    //Unless called from outer function in this case setTimeout
    stop(){
        
        setTimeout(()=>super.stop(),1000);

        /*
        ** setTimeout(function() { super.stop() }, 1000)
        ** returns Unexpected super
        */
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);//Method from extended class
rabbit.hide();//White rabbit hides

//Anything is allowed after the extend
//See example
//Extends a function that creates a class

function f(phrase) {
    return class {
        sayHi() { alert(phase); }
    };
}

class User extends f('Hello'){}

new User().sayHi();

//Here class User inherits from the result of f("Hello").


