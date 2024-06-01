let input = require('sync-input');
console.log("Starting to make a coffee");
console.log("Grinding coffee beans");
console.log("Boiling water");
console.log("Mixing boiled water with crushed coffee beans");
console.log("Pouring coffee into the cup");
console.log("Pouring some milk into the cup");
console.log("Coffee is ready!");

let coffeeCups = input("Write how many cups of coffee you will need:");
console.log("For " + coffeeCups + " cups of coffee you will need:");
console.log( coffeeCups * 200 + " ml of water");
console.log(coffeeCups * 50 +" ml of milk");
console.log(coffeeCups * 15 +" g of coffee beans");

let water = input("Write how many ml of water the coffee machine has");
let milk = input("Write how many ml of milk the coffee machine has");
let beans = input("Write how many grams of coffee beans the coffee machine has");

function coffeeForAll(){
  let waterAvailable = parseInt(input("Write how many ml of water the coffee machine has:"));
  let milkAvailable = parseInt(input("Write how many ml of milk the coffee machine has:"));
  let coffeeAvailable = parseInt(input("Write how many grams of coffee beans the coffee machine has:"));

  let coffeeNeeded = parseInt(input("Write how many cups of coffee you will need:"));

  let cupsWater = Math.floor(waterAvailable / 200);
  let cupsMilk = Math.floor(milkAvailable / 50);
  let cupsCoffeeBeans = Math.floor(coffeeAvailable / 15);

  let maxCups = Math.min(cupsCoffeeBeans, cupsWater, cupsMilk);

  if (maxCups >= coffeeNeeded) {
    if ( maxCups > coffeeNeeded) {
      console.log("Yes, I can make that amount of coffee (and even " + (maxCups - coffeeNeeded) +
                  "more than that)");
    }else {
      console.log("Yes, I can make that amount of coffee");
    }
    
  }else {
    console.log("No, I can make only " + maxCups + "cups of coffee");
  }
}

coffeeForAll();


let input = require('sync-input');

class CoffeeMachine {
  constructor() {
    this.water = 400;
    this.milk = 540;
    this.beans = 120;
    this.cups = 9;
    this.money = 550;
  }

  buy(coffeeType){
   switch(coffeeType){
      case "1":
        this.makeCoffee (250, 0, 16, 1, 4);
        break;
      case "2":
        this.makeCoffee (350, 75, 20, 1, 7);
        break;
      case "3":
        this.makeCoffee (200, 100, 12, 1, 6);
        break;
      default: 
        console.log("Invalid coffee type...")
    }
  }

  makeCoffee (waterNeeded, milkNeeded, beansNeeded, cupNeeded, Price){
    if (this.water >= waterNeeded && 
        this.milk >= milkNeeded && 
        this.beans >= beansNeeded &&
        this.cups >= cupNeeded) {
      console.log("Coffee right up");
      this.water -= waterNeeded;
      this.milk -= milkNeeded;
      this.beans -= beansNeeded;
      this.cups -= cupNeeded;
      this.money += Price;
    } else {
      console.log("Sorry, you need to refill.")
    }
  }

  fill (water, milk, beans, cups, money){
    this.water += water;
    this.milk += milk;
   this.beans += beans;
    this.cups += cups;
  }

  take(){
    console.log("I gave you $" + this.money);
    console.log("");
    this.money = 0;
  }
  displaySupplies(){
    console.log("The coffee machine has:");
    console.log(this.water + " ml of water");
    console.log(this.milk + " ml of milk");
    console.log(this.beans + " g of coffee beans");
    console.log(this.cups + " disposable cups");
    console.log("$" + this.money + " of money");
  }
}
const coffeeMachine = new CoffeeMachine();
coffeeMachine.displaySupplies();

const action = input("Write action (buy, fill, take):");

if (action === "buy") {
  const coffeeType = input
    ("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
  coffeeMachine.buy(coffeeType); 
} else if(action === "fill"){
   const water = parseInt(input("Write how many ml of water do you want to add:"));
   const milk = parseInt(input("Write how many ml of milk do you want to add:"));
   const beans = parseInt(input("Write how many g of coffee beans do you want to add:"));
   const cups = parseInt(input("Write how many disposable cups do you want to add:"));
  coffeeMachine.fill(water, milk, beans, cups);
} else if (action === "take") {
  coffeeMachine.take()
} else if (action === "remaining"){
  coffeeMachine.remaining()
} else if (action === "exit") {
}



05 March 2024

let input = require('sync-input');

class CoffeeMachine {
  constructor() {
    this.water = 400;
    this.milk = 540;
    this.beans = 120;
    this.cups = 9;
    this.money = 550;
  }

  buy(coffeeType){
    switch(coffeeType){
  case "1":
        this.makeCoffee (250, 0, 16, 1, 4);
        break;
      case "2":
        this.makeCoffee (350, 75, 20, 1, 7);
        break;
      case "3":
        this.makeCoffee (200, 100, 12, 1, 6);
        break;
      default: 
        console.log("Invalid coffee type!");
        return;
    }
  }
 
  makeCoffee (waterNeeded, milkNeeded, beansNeeded, cupNeeded, price){
    const isWaterAvailable = waterNeeded <= this.water; 
    const isMilkAvailable = milkNeeded <= this.milk;
    const isBeansAvailable = beansNeeded <= this.beans;
    const isCupAvailable = cupNeeded <= this.cups;
    
    if (isWaterAvailable && isMilkAvailable && 
        isBeansAvailable && isCupAvailable) {
      console.log("I have enough resources, making you a coffee!");
      this.water -= waterNeeded;
      this.milk -= milkNeeded;
      this.beans -= beansNeeded;
      this.cups -= cupNeeded;
      this.money += price;
    } else {
      if (!isWaterAvailable) {
         console.log("Sorry, not enough water!"); 
     } else if (!isBeansAvailable){
        console.log("Sorry, not enough beans!");
      } else if (!isMilkAvailable) {
        console.log("Sorry, not enough milk!");
      } else if (!isCupAvailable) {
        console.log("Sorry, not enough cups!");
      } 
    }
  }
 
  fill (water, milk, beans, cups){
    this.water += water;
    this.milk += milk;
    this.beans += beans;
    this.cups += cups;
  }

  take(){
    console.log("I give you $" + this.money);
    console.log("");
    this.money = 0;
  }
  remaining(){
    console.log("The coffee machine has:");
    console.log(this.water + " ml of water");
    console.log(this.milk + " ml of milk");
    console.log(this.beans + " g of coffee beans");
    console.log(this.cups + " disposable cups");
    console.log("$" + this.money + " of money");
    console.log("");
  }
}
const coffeeMachine = new CoffeeMachine();
function startingMachine() { 
  console.log("Welcome to the Coffee Machine!")
while (true) {
const action = input
  ("Write action (buy, fill, take, remaining, exit):");

switch (action){
  case 'buy':
    let coffeeType;
    while (true) {
      coffeeType = input
    ("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
   if (coffeeType === "back") {
     break;
   };
      if (["1", "2", "3"].includes(coffeeType)) {
        coffeeMachine.buy(coffeeType);
        break;
      } else {
        console.log('Invalid coffee type! Please try again.');
      }
    }
    break;
case "fill":
   const water = parseInt(input("Write how many ml of water do you want to add:"));
   const milk = parseInt(input("Write how many ml of milk do you want to add:"));
   const beans = parseInt(input("Write how many g of coffee beans do you want to add:"));
   const cups = parseInt(input("Write how many disposable cups do you want to add:"));
   coffeeMachine.fill(water, milk, beans, cups);
    break;
  case "take":
    coffeeMachine.take();
    break;
  case "remaining":
    coffeeMachine.remaining();
    break;
  case "exit":
    console.log("Shutting down the Coffee Machine. Goodbye!");
    return;
  default: 
    console.log('Invalid action! Please try again.');
  }
 }
}

startingMachine();
