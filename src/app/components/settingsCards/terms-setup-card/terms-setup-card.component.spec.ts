import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsSetupCardComponent } from './terms-setup-card.component';

describe('TermsSetupCardComponent', () => {
  let component: TermsSetupCardComponent;
  let fixture: ComponentFixture<TermsSetupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsSetupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsSetupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
