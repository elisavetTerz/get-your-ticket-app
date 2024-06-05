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
      routerLink: 'theatre-shows',
    },
    {
      text: 'HTTP Client Example',
      routerLink: 'http-client-example',
    },
    {
      text: 'User Registration Example',
      routerLink: 'user-registration-example'
    },
    // {
    //   text: 'Restricted Content Example', 
    //   routerLink: 'restricted-content-example'
    // },
    //{ text: 'CRUD Example', routerLink: 'crud-example' },
  ];
}

