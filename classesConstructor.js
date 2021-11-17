/*
** Overriding constructor
** According to specifications if a class inherits another class and it has no constructor of it's own
** It inherits the parent's constructor and initiates it with all the parameters
** In our case rabbit inherits Animal constructor
*/
class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        alert(`${this.name} stands still.`);
    }
}

class Rabbit extends Animal {

    /*
    **Generated from extending classes without it's own constructor
        constructor(...args) {
            super(...args)
        }
    */

    /*
    Constructors in inheriting classes must call super(...), and (!) do it before using this.
    like the case of name inherited from Animal class
    */

    constructor(name,earthLength){
    super(name);//To call parent param
    this.earthLength = earthLength;
    }

    hide(){
        alert(`${this.name} hides!`);
    }

    stop() {
        super.stop();//Call parent stop
        this.hide();//and then hide
    }
}

let rabbit = new Rabbit("White rabbit");

rabbit.run(5);//From parent Animal class
rabbit.stop();//From Rabbit class called from super


