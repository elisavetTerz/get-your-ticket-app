import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'src/app/shared/interfaces/menu-item';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css',
})
export class ListGroupMenuComponent {
  menu: MenuItem[] = [
    {
      text: 'Theatre Shows',
      routerLink: 'event-shows',
    },
    {
      text: 'Buy Tickets',
      routerLink: 'buy-tickets',
    },
    {
      text: 'User Page', 
      routerLink: 'user-page'
    },
    // {
    //   text: 'User Login', 
    //   routerLink: 'user-login'
    // },
    {
      text: 'User Registration',
      routerLink: 'user-registration'
    },
  ];
}

