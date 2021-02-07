
class Product {

    constructor(id, name, price, label, photo, description) {
        this.id = id
        this.name = name
        this.price = price
        this.label = label
        this.photo = photo
        this.description = description
        this.isInStock = true
    }

    getName() {
        return this.name
    }
   
    setName(name) {
        this.name = name
    }

    getPrice() {
        return this.price
    }

    getFormattedPrice() {
        return this.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
   
    setPrice(price) {
        this.price = price
    }

    getLabel() {
        return this.label || "outros"
    }
   
    setLabel(label) {
        this.label = label
    }

    getPhoto() {
        return this.photo || "Sem Foto"
    }
   
    setPhoto(photo) {
        this.photo = photo
    }

    getDescription() {
        return this.description || "Sem Descrição"
    }
   
    setDescription(description) {
        this.description = description
    }

    hasStock() {
        return this.isInStock
    }
   
    setIfhasStock(isInStock) {
        this.isInStock = isInStock
    }

}

export default Product;
