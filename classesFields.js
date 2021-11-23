/**
 * Always remember in classes functions/object inside contructors excecute
 * Wherever the class is initiated
 */
'use strict';

class Animal {
    name = "animal";

    constructor(){
        alert(this.name);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
}

new Animal(); //Animal
new Rabbit(); //Animal

/**
 * NB : Parent constructors always uses its own field value,not overridden one.
 * So the above code will alert animal
 * To over ride a property you use as below
 */

"use strict";

class Animal {
    showName() {
        alert('animal');
    }

    constructor (){
        this.showName();
    }
}

class Rabbit extends Animal {
    //Overridden method
    showName(){
        alert('rabbit');
    }
}

new Animal();//animal

new Rabbit();//rabbit
