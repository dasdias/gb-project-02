class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.getSumProducts();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    /**
     * метод обходит все товары и суммирует значение в свойстве price
     * @returns число.
     */
    getSumProducts() {
        let totalSum = this.goods.reduce((acc, item) => acc + item.price, 0);
        alert(`Сумма всех товаров: ${totalSum}`);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
             // block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket{
    constructor(id, product, price, count){
        this.id = id;
        this.product = product;
        this.price = price;
        this.count = count;
    }

    /**
     * Добавление товара в корзину
     */
    addToBasket(){
        console.log('Add item for basket');
    }

    /**
     * Удаляем товар из корзины
     */
    removeItemBasket(){
        console.log('Remove item from basket')
    }

    /**
     * увеличение количество существующего товара в корзине
     */
    incrementItemBasket(){
        console.log('Увеличение количество существующего товара в корзине');
    }

    /**
     * Уменьшение и удаление количества существующего товара в корзине
     */
    decrimentItemBasket(){
        console.log('Уменьшение и удаление количества существующего товара в корзине')
    }

    /**
     * Вывод товара в DOM
     */
    render(){}
}

class ElemBasket {
    constructor(id, product, price, count) {
        this.id = id;
        this.product = product;
        this.price = price;
        this.count = count; 
    }

    /**
     * метод возвращает верстку с подставленными значениями из свойств конструктора
     */
    render(){

    }
}

let list = new ProductList();

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);