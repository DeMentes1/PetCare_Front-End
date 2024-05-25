import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContentViewComponent } from './services-content-view.component';

describe('ServicesContentViewComponent', () => {
  let component: ServicesContentViewComponent;
  let fixture: ComponentFixture<ServicesContentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesContentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
