import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private serviceAPI: ApiService) {}
  user: { firstname: string | null, lastname: string | null, isAdmin: boolean } = this.serviceAPI.user
}
