import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!: number;
  product!: Products;
  submitted = false;


  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.product = new Products();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Products();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();
  }

  gotoList() {
    this.router.navigate(['/products']);
  }

}
