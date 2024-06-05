import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRegisterComponent } from "./components/user-register/user-register.component";
import { UserLoginComponent } from "./components/user-login/user-login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserRegisterComponent, UserLoginComponent]
})
export class AppComponent {
  title = 'get-your-ticket-app-angular';
}
