import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrl: './billing-view.component.css'
})
export class BillingViewComponent {
  products=[
    {imgUrl: 'assets/download.jpg', nombre:'Comedero', precio: 'S/65.00' },

  ]

  methods: string[] = ['Pagar con efectivo', 'Tarjetas de debitos o credito', 'Yape o Plin'];
  hide=false;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    //this.dialog.open(DialogElementsExampleDialog);
  }

}
