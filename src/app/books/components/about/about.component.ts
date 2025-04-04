import { Component } from '@angular/core';
import { TypeSectionComponent } from '../../../shared/components/type-section/type-section.component';

@Component({
  selector: 'app-about',
  imports: [TypeSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
