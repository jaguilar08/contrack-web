import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsSelectionCardComponent } from './terms-selection-card.component';

describe('TermsSelectionCardComponent', () => {
  let component: TermsSelectionCardComponent;
  let fixture: ComponentFixture<TermsSelectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsSelectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsSelectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
