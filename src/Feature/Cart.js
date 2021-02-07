
import Product from "../Model/Product";

class Cart {

    constructor() {
        this.local = window.localStorage
        console.log(this.local);
    }

    add(product) {
        console.log(product instanceof Product)
        this.local.setItem('product', product)
    }

    remove(productId) {

    }

    update(productId) {

    }

    list() {
        const product = this.local.getItem('product')
        console.log(product instanceof Product)
        return product
    }

    has(productId) {

    }

    get(productId) {
        
    }

}

export default Cart;
