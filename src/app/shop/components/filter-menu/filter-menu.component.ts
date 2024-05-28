import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css'
})
export class FilterMenuComponent {
  @Output() categoryChange = new EventEmitter<string>();

  categories: string[] = ['All', 'Cleaning Products', 'Pet Food', 'Pet Toys', 'Pet Accessories', 'Aquarium Supplies', 'Pet Treats', 'Reptile Supplies', 'Small Animal Supplies', 'Bird Supplies'];

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category);
  }
}
