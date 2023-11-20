import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true,
})

export class ReservationPageComponent {
  constructor(private serviceAPI: ApiService) {}

  selectedTimeSlot: string = '';
  profileForm = new FormGroup ({
    firstnameField : new FormControl('', [Validators.required]),
    lastnameField : new FormControl('', [Validators.required]),
    mailField : new FormControl('', [Validators.required, Validators.email]),
    phoneField : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]),
    dateField : new FormControl('', [Validators.required]),
    hourField : new FormControl('', [Validators.required]),
    seatField : new FormControl('', [Validators.required, Validators.min(0), Validators.max(8)]),
    allergieField : new FormControl(''),
  });

  bookedTimeSlots: string[] = ['12:00', '12:15', '12:30']; // Exemple

  isTimeSlotTaken(timeSlot: string): boolean {
    return this.bookedTimeSlots.includes(timeSlot);
  }

  selectTimeSlot(timeSlot: string): void {
    if (this.isTimeSlotTaken(timeSlot)) {
      console.log('Ce créneau est déjà pris.');
      return;
    }

    this.profileForm.get('hourField')?.setValue(timeSlot);
    this.selectedTimeSlot = timeSlot;
  }

  onSubmit() {
    if (this.profileForm.valid) { 
      this.serviceAPI.createReservation(this.profileForm.value)
    }
  }
}
