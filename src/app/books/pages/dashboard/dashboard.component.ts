import { Component } from '@angular/core';
import { AsideComponent } from '../../components/aside/aside.component';

@Component({
  selector: 'app-dashboard',
  imports: [AsideComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
