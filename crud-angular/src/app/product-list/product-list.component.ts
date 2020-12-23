
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from '../products';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})  
export class ProductListComponent implements OnInit {

  product!: Observable<Products[]>;
  name!: string;

  constructor(private ProductService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.product = this.ProductService.getProductList();
  }

  deleteProduct(id: number) {
    console.log(id);
    this.ProductService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }

  searchName() {
    this.product = this.ProductService.searchName(this.name)
  } 


}
