class Hamburger {
    constructor(size, stuffing, toppings = null) {
        this.size = this.getSize(size);
        this.stuffing = this.getStuffing(stuffing);
        this.toppings = this.getToppings(toppings);
    }

    getStuffing(stuffing) {
        let result;
        this.stuffing = [
            {name: 'Cheese', price: 10, calories: 20},
            {name: 'Salad', price: 20, calories: 5},
            {name: 'Fries', price: 15, calories: 10}
        ];
        result = this.stuffing.find(el => el.name === stuffing);
        return result;
    }

    addTopping(topping) {

    }
    removeTopping(topping) {

    }
    getToppings(toppings) {
        let result = [];
        this.toppings = [
            {name: 'Seasoning', price: 15, calories: 0},
            {name: 'Mayonnaise', price: 20, calories: 5}
        ];
        result = this.toppings.filter(el => toppings.find(element => element === el.name));
        return result;
    }

    getSize(size) {
        let result;
        this.size = [
            {name: 'Small', price: 50, calories: 20},
            {name: 'Big', price: 100, calories: 40}
        ];
        result = this.size.find(el => el.name === size);
        return result;

    }
    calculatePrice() {
        let totalPrice;
        totalPrice = this.size.price + this.stuffing.price;
        this.toppings.forEach(el => totalPrice += el.price);
        return totalPrice;


    }
    calculateCalories() {
        let totalCalories;
        totalCalories = this.size.calories + this.stuffing.calories;
        this.toppings.forEach(el => totalCalories += el.calories);
        return totalCalories;
    }
}

let smallHamburger = new Hamburger('Small', 'Salad', ['Seasoning', 'Mayonnaise']);
console.log(smallHamburger.calculatePrice(), smallHamburger.calculateCalories());

let bigHamburger = new Hamburger('Big', 'Cheese', ['Seasoning']);
console.log(bigHamburger.calculatePrice(), bigHamburger.calculateCalories());
