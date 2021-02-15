
import Product from "../Model/Product";

class Cart {
    constructor() {
        this.local = window.localStorage
        this.localStorageParam = 'products'
        console.log(this.local);
    }

    add(product) {
        if (product instanceof Product) {
            this.local.setItem(this.localStorageParam, product)
            this.local.setItem(this.localStorageParam, {a: 1})
        }
    }

    remove(productId) {

    }

    update(productId) {

    }

    list() {
        const product = this.local.getItem(this.localStorageParam)
        return product
    }

    has(productId) {

    }

    get(productId) {
        
    }

}

export default Cart;
