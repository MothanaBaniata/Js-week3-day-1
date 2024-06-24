/********* Task 1, 2 & 3 *********/

class Car {
  
  make0 = 'mercedes';
  model0 = 'gls2100';

  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
    

  start(){
    console.log('The car is started');
  }
}

const car0 = new Car()
console.log(car0.make0 + ' ' + car0.model0);


const car1 = new Car("mercedes", "gls2050");
console.log(car1);


car1.start()


/********* Task 4 *********/

class ElectricCar extends Car {
  battery_size;
  constructor(make, model,battery_size){
    super(make,model)
    this.battery_size = battery_size;
  }
}

const carElectric = new ElectricCar('shangan', 's3010' ,50000)
console.log(carElectric);


/********* Task 5 & 6 *********/

class Account {
  #_balance;
  
  constructor(balance0){
    this.#_balance = balance0

  }

  deposit(deposit1){
    this.#_balance +=deposit1
    console.log(this.#_balance);
  }

  withdraw(withdraw1){
    this.#_balance -=withdraw1
  }
  set_balance(balance){
    this.#_balance = balance;
  }

  get_balance(){
    return this.#_balance;
  }
}

let amount = new Account(20)
console.log(amount)

amount.deposit(30);
console.log(amount.get_balance());

amount.withdraw(25);
console.log(amount.get_balance());
