import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BaseService} from "../../shared/services/base-service.service";
import {ProductEntity} from "../model/product-entity";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<ProductEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/products';
  }
}

