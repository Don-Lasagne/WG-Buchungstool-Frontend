import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungsElementComponent } from './buchungs-element.component';

describe('BuchungsElementComponent', () => {
  let component: BuchungsElementComponent;
  let fixture: ComponentFixture<BuchungsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuchungsElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuchungsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
