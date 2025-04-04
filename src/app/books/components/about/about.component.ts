import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { TypeSectionComponent } from '../../../shared/components/type-section/type-section.component';

@Component({
  selector: 'app-about',
  imports: [ServicesComponent, TypeSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
