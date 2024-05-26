import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base-service.service";
import {VeterinaryEntity} from "../model/veterinary-entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VeterinaryService extends BaseService<VeterinaryEntity>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/vets';
  }
}
