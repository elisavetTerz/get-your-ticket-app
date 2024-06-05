import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterLink, RouterOutlet, NavbarComponent, ListGroupMenuComponent]
})
export class AppComponent {
  title = 'get-your-ticket-app-angular';
}
