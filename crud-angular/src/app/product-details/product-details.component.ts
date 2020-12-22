import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../products.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!: number;
  product!: Products;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Products();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['products']);
  }
  
  list(){
    this.router.navigate(['products']);
  }
  
}