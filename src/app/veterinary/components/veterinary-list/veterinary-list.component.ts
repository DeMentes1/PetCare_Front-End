import {Component, Input, OnInit} from '@angular/core';
import {VeterinaryEntity} from "../../model/veterinary-entity";
import {VeterinaryService} from "../../services/veterinary.service";

@Component({
  selector: 'app-veterinary-list',
  templateUrl: './veterinary-list.component.html',
  styleUrl: './veterinary-list.component.css'
})
export class VeterinaryListComponent implements OnInit{
  @Input() veterinaries: VeterinaryEntity[] = [];

  constructor(
    private veterinaryService: VeterinaryService,
  ) {}

  ngOnInit() {
    this.getAllVeterinaries();
  }

  private getAllVeterinaries() {
    this.veterinaryService.getAll().subscribe((response: any) => {
      this.veterinaries = response;
      console.log(this.veterinaries);
    });
  }
}
