import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshopComponent } from './detailshop.component';

describe('DetailshopComponent', () => {
  let component: DetailshopComponent;
  let fixture: ComponentFixture<DetailshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
