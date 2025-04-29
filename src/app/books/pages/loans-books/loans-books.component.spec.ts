import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansBooksComponent } from './loans-books.component';

describe('LoansBooksComponent', () => {
  let component: LoansBooksComponent;
  let fixture: ComponentFixture<LoansBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
