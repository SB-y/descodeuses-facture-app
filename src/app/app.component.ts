import { Component } from '@angular/core';
import { routes } from './app-routing.module';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'facture-app';
  listMenu = routes;
}


