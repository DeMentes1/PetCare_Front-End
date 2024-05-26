import {Component, Input, OnInit} from '@angular/core';
import {ProductEntity} from "../../model/product-entity";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit{
  @Input() products: ProductEntity[] = [];

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.productService.getAll().subscribe((response: any) => {
      this.products = response;
      console.log(this.products);
    });
  }
}
