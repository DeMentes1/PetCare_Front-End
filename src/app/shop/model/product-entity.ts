
export class ProductEntity {
  productName: string;
  productDescription: string;
  productPrice: number;
  productCategory: string;

  constructor() {
    this.productName = '';
    this.productDescription = '';
    this.productPrice = 0;
    this.productCategory = '';
  }
}
