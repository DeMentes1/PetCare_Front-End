import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryListComponent } from './veterinary-list.component';

describe('VeterinaryListComponent', () => {
  let component: VeterinaryListComponent;
  let fixture: ComponentFixture<VeterinaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinaryListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
