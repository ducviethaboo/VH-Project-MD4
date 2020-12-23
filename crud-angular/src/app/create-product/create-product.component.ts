
import { ProductService } from '../products.service';
import { Products } from '../products';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Products = new Products();
  submitted = false;
  constructor(private ProductService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.product = new Products();
  }

  save() {
    this.ProductService
      .createProduct(this.product).subscribe((data: any) => {
        console.log(data)
        this.product = new Products();
        this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}