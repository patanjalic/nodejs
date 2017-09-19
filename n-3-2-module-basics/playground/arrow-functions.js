var person = {
  name:'Eeshan',
  sayHi: () => {
    console.log(`hi i am ${this.name}`);
    console.log(arguments); //arguments and this keyword is not accessible in arrow functions
  },
  sayHiAlt() {
    console.log(`hi i am ${this.name}`);
    console.log(arguments);
  }
}

person.sayHi();
person.sayHi(1,2,3);
person.sayHiAlt();
person.sayHiAlt(1,2,3);
