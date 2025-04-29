import { Component } from '@angular/core';

import { HeroComponent } from '../components/hero/hero.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboutComponent } from '../components/about/about.component';
import { ServicesComponent } from '../components/services/services.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
