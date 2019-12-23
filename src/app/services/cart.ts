import { ShoppingCartModel } from '../models/ShoppingCartModel';
import { ProductModel } from '../models/ProductModel';

export function removeObjectFromCart(product: ProductModel) {
  var products: ProductModel[] = ShoppingCartModel.products
  removeProductFromArray(products, product);
  ShoppingCartModel.products = products
  this.sumProductsInCart()


}

export function removeProductFromArray(products: ProductModel[], product: ProductModel) {
  var index = products.indexOf(product);
  if (index > -1) {
    products.splice(index, 1);
  }
  return products;
}

export function sumProductsInCart() {
  var products: ProductModel[] = ShoppingCartModel.products
  var total = 0
  products.forEach(product => {
    total = total + product.price
  })
  return total;
}
