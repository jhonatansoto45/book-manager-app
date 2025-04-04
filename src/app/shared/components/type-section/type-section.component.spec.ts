import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSectionComponent } from './type-section.component';

describe('TypeSectionComponent', () => {
  let component: TypeSectionComponent;
  let fixture: ComponentFixture<TypeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
