/* Criando classe */

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  /*Metodo */
  talk() {
    console.log(`${this.name} talking with you`);
  }
}

const Person1 = new Person("Anna", "Reis");
console.log(Person1);
console.log(Person1.talk());

/* Symbol =>  o symbol ele cria um id dinamico e unico 
podemos usar o symbol em casos que nos nao queremos que
outro usuario nao altere o valor da key na mao no exemplo
abaixo a velocidade so podera ser alterada quando ele passar 
pelas condicionais do set velocity  =>  podemos usar principalmente 
quando queremos controlar algo dentro do nossa class*/

// const [_velocity] = Symbol();
// //console.log("symbol", _velocity); //symbol Symbol(velocity of the car)

// class Car {
//   constructor(name) {
//     this.name = name;
//     this[_velocity] = 0;
//   }

//   set velocity(value) {
//     if (typeof value !== "number") return;
//     if (value >= 100 || value <= 0) return;
//     this[_velocity] = value;
//   }

//   get velocity() {
//     return this[_velocity];
//   }

//   accelerate() {
//     if (this[_velocity] >= 100) return;
//     this[_velocity]++;
//   }

//   brake() {
//     if (this[_velocity] <= 0) return;
//     this[_velocity]--;
//   }
// }

// const carFusca = new Car("Fusca");
// carFusca.velocity = 99;
// console.log(carFusca.velocity);

class Mobile {
  constructor(nameMobile) {
    this.nameMobile = nameMobile;
    this.statusMobile = false;
  }

  turnOn() {
    if (this.statusMobile) {
      return `${this.nameMobile} is connected`;
    }

    this.statusMobile = true;
  }

  turnOff() {
    if (!this.statusMobile) {
      return `${this.nameMobile} it's  off`;
    }

    this.statusMobile = false;
  }
}

const Sansung = new Mobile("Smartphone");
console.log("samsung", Sansung);
Sansung.turnOn();
console.log("TurnON", Sansung);
Sansung.turnOff();
console.log("TurnOff", Sansung);

class Characteristics extends Mobile {
  constructor(name, color, model) {
    super(name); // Herda tudo que esta no constructor da class que estamos extendendo => lembrando que se o constuctor da classe que estamos extendendo receber um paramentro de fora nos precisameos recebe-lo passar ele no super e no constructor novamente
    this.color = color;
    this.model = model;
  }
}

const ModelSamsung = new Characteristics("Samsung", "Black", "Galaxy S10");
console.log(ModelSamsung);
