class Hamburger {
    constructor(size, stuffing, toppings = null) {
        this.sizeList = this._renderSizeList();
        this.stuffingList = this._renderStuffingList();
        this.toppingList = this._renderToppingList();
        this.size = this.getSize(size);
        this.stuffing = this.getStuffing(stuffing);
        this.toppings = this.getToppings(toppings);
    }

    _renderSizeList() {
        this.sizeList = [
            {name: 'Small', price: 50, calories: 20},
            {name: 'Big', price: 100, calories: 40}
        ];
        return this.sizeList;
    }

    _renderStuffingList() {
        this.stuffingList = [
            {name: 'Cheese', price: 10, calories: 20},
            {name: 'Salad', price: 20, calories: 5},
            {name: 'Fries', price: 15, calories: 10}
        ];
        return this.stuffingList;
    }

    _renderToppingList() {
        this.toppingList = [
            {name: 'Seasoning', price: 15, calories: 0},
            {name: 'Mayonnaise', price: 20, calories: 5}
        ];
        return this.toppingList;
    }

    getSize(size) {
        let result = this.sizeList.find(el => el.name === size);
        return result;
    }

    getStuffing(stuffing) {
        let result = this.stuffingList.find(el => el.name === stuffing);
        return result;
    }

    addTopping(toppingName) {
        let result = this.getToppings([toppingName]);
        result.find(el => this.toppings.push(el.name === toppingName));
        return this.toppingList;
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(el => el.name != topping);
        return this.toppings;
    }

    getToppings(toppings) {
        let result = this.toppingList.filter(el => toppings.find(element => element === el.name));
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
console.log(smallHamburger.calculatePrice(), smallHamburger.calculateCalories(), smallHamburger.removeTopping('Ketchup'));

let bigHamburger = new Hamburger('Big', 'Cheese', ['Seasoning']);
console.log(bigHamburger.calculatePrice(), bigHamburger.calculateCalories(), bigHamburger.addTopping('Mayonnaise'));
