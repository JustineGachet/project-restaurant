import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true
})
export class LoginComponent {
  constructor(private serviceAPI: ApiService, private router: Router) {}

  error: boolean = false;
  profileForm = new FormGroup ({
    email : new FormControl(null, [Validators.required]),
    password : new FormControl(null, [Validators.required]),
  });

  async onSubmit() {
    if (this.profileForm.valid && this.profileForm.value.email && this.profileForm.value.password) {
    await this.serviceAPI
      .loginUser({ 
        email: this.profileForm.value.email as string, 
        password: this.profileForm.value.password as string
      })
      .then((data) => {
        if (data.error) {
          this.error = true
        } else if(data.is_admin > 0) {
          this.router.navigate(['/admin-page']);
        } else {
          this.router.navigate(['/reservation-page']);
        }
      })
    }
  }
}

