import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-search-bar',
  templateUrl: './products-search-bar.component.html',
  styleUrl: './products-search-bar.component.css'
})
export class ProductsSearchBarComponent {
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.searchChange.emit(target.value);
    }
  }
}
