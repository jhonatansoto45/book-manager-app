import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
  selector: 'app-main',
  imports: [AsideComponent, HeaderComponent, RouterOutlet],
  templateUrl: './main.component.html',
})
export class MainComponent {}
