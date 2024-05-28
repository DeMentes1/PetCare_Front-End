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
  currentSearchValue: string = '';
  currentCategory: string = 'All';

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.productService.getAll().subscribe((response: any) => {
      this.products = response;
      this.applyFilters();
      console.log(this.products);
    });
  }

  filterProducts(searchValue: string) {
    this.currentSearchValue = searchValue;
    this.applyFilters();
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.productName.toLowerCase().includes(this.currentSearchValue.toLowerCase()) ||
        product.productDescription.toLowerCase().includes(this.currentSearchValue.toLowerCase());
      const matchesCategory = this.currentCategory === 'All' || product.productCategory === this.currentCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
