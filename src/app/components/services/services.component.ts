import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { TypeSectionComponent } from '../../shared/components/type-section/type-section.component';
interface Services {
  title: string;
  description: string;
  icon: any;
}

@Component({
  selector: 'app-services',
  imports: [TypeSectionComponent, FontAwesomeModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Services[] = [
    {
      icon: faSquare,
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: faCheckSquare,
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: faCheckSquare,
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: faSquare,
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: faSquare,
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: faCheckSquare,
      title: 'Lorem ipsum dolor sit amet, consectetur adip',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
}
