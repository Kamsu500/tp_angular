import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products:any[]=[];

  constructor(private http : HttpClient) {}

  getAllProducts()
    {
      return this.http.get('assets/data.json');
    }

  getProduct()
  {
    return this.products;
  }

  saveCart()
  {
    localStorage.setItem('cart_items',JSON.stringify(this.products));
  }

  addTocart(addedProduct:any)
  {
    this.products.push(addedProduct);
    this.saveCart();
  }

  loadCart()
  {
    this.products = JSON.parse(localStorage.getItem('cart_items')as any)||[];
  }

  productInCart(product:any)
  {
    return this.products.findIndex((x:any)=>x.id===product.id)>-1;
  }
}
