const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // window.ActiveXObject ->  xhr = new ActiveXObject();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status !== 200){
                    console.log('error')
                } else {
                    cb(xhr.responseText)
                }
            }
        }
    })
};



getRequest(`${API}/catalogData.json`)
    .then((result) => result.json())
    .then(data => {
        this.data = [...data];
    });

class ProductsList {
    constructor(container = '.products'){
        this.data = [];
        this.container = container;
        this.productsAll = [];
        this._getProducts()
            .then(() => {
                this._render()
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = [...data];
            })
            .catch(error => console.log(error));
    }
    calcSum(){
        // let result = 0;
        // for (let product of this.productsAll) {
        //     result += product.price
        // }
        // return result
        return this.productsAll.reduce((accum, item) => accum += item.price, 0);
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let product of this.data){
            const prod = new ProductItem(product);
            this.productsAll.push(prod);
            block.insertAdjacentHTML('beforeend', prod.render());
        }
    }
}


class ProductItem {
    constructor(product, img = `https://placehold.it/200x150`) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img
    }

    render(){
        return `<div class="product-item">
                  <img src="${this.img}" alt="${this.product_name}">
                  <div class="desc">
                      <h3>${this.product_name}</h3>
                      <p>${this.price}</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`
    }
}

class Cart {
    constructor(){
        // this.some // какое-то свойство
    }
    calc(){} // метод что-то делает
}

const products = new ProductsList();


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
