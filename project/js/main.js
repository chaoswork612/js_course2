class ProductsList {
    constructor(container = '.products'){
        this.data = [];
        this.container = container;
        this.productsAll = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
            {id: 5, title: 'Chair', price: 120, template: 1},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let product of this.data){
            const prod = new ProductItem(product);
            this.productsAll.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
    }
    static countTotalPrice(productsList) {
        let totalPrice = null;
        for (let product of productsList) {
            totalPrice += product.price;
        }
        console.log(totalPrice);
    }
}


class ProductItem {
    constructor(product, img = `https://placehold.it/200x150`) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img
    }

    render(){
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }
}

class Cart {
    constructor(){}
    countTotalQuantity(){}
    countTotalPrice(){}
}

class CartElement {
    constructor() {}
    addProduct(){}
    removeProduct(){}
}

const products = new ProductsList();
ProductsList.countTotalPrice(products.productsAll);




// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 30},
//     {id: 3, title: 'Keyboard', price: 55},
//     {id: 4, title: 'Gamepad', price: 65},
//     {id: 5, title: 'Chair', price: 120, template: 1},
// ];
// const renderProduct = (title, price = 'Out of stock', img = `https://placehold.it/200x150`) => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
// const renderPage = list => {
//     for (let item of list) {
//         document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(item.title, item.price))
//     }
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
// };
//
// renderPage(products);
