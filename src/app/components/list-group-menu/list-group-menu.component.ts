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
    // {
    //   text: 'Theatre Shows',
    //   routerLink: 'theatre-shows',
    // },
    // {
    //   text: 'Buy Tickets',
    //   routerLink: 'buy-tickets',
    // },
    {
      text: 'User Registration',
      routerLink: 'user-registration'
    },
    // {
    //   text: 'User Login', 
    //   routerLink: 'user-login'
    // },
  ];
}

