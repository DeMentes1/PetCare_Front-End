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
  filteredProducts: ProductEntity[] = [];

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.productService.getAll().subscribe((response: any) => {
      this.products = response;
      this.filteredProducts = response;
      console.log(this.products);
    });
  }

  filterProducts(searchValue: string) {
    this.filteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.productDescription.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
