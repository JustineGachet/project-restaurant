import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { AdminTableComponent } from 'src/app/components/admin-table/admin-table.component';

import type { Column } from 'src/app/components/admin-table/admin-table.component';
import type { Item, EventParams } from 'src/app/components/admin-table/admin-table.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  imports: [
    AdminTableComponent
  ],
  standalone: true
})
export class AdminPageComponent {
  constructor(private serviceAPI: ApiService) {}

  menus:Item[] = [];
  menuColumns:Column[] = [
    {
      title: 'ID',
      keyToDisplay: 'id',
      isEditable: false
    },
    {
      title: 'Nom du menu',
      keyToDisplay: 'title',
      isEditable: true
    },
    {
      title: 'Description',
      keyToDisplay: 'description',
      isEditable: true
    },
    {
      title: 'Prix',
      keyToDisplay: 'price',
      isEditable: true
    },
    {
      title: 'Monnaie',
      keyToDisplay: 'currency',
      isEditable: true
    },
    {
      title: 'Liens',
      keyToDisplay: 'image_url',
      isEditable: true
    },
  ];
  
  foodList:Item[] = [];
  foodListColumns:Column[] = [
    {
      title: 'ID',
      keyToDisplay: 'id',
      isEditable: false
    },
    {
      title: 'Type',
      keyToDisplay: 'type',
      isEditable: true
    },
    {
      title: 'Nom du menu',
      keyToDisplay: 'title',
      isEditable: true
    },
    {
      title: 'Description',
      keyToDisplay: 'description',
      isEditable: true
    },
    {
      title: 'Prix',
      keyToDisplay: 'price',
      isEditable: true
    },
    {
      title: 'Monnaie',
      keyToDisplay: 'currency',
      isEditable: true
    },
    {
      title: 'Liens',
      keyToDisplay: 'image_url',
      isEditable: true
    },
    {
      title: 'Est exposé',
      keyToDisplay: 'is_exposed',
      isEditable: true
    },
  ];

  schedule:Item[] = [];
  scheduleColumns:Column[] = [
    {
      title: 'ID',
      keyToDisplay: 'id',
      isEditable: true
    },
    {
      title: 'Jour',
      keyToDisplay: 'day',
      isEditable: true
    },
    {
      title: 'Heure ouverture déjeuner',
      keyToDisplay: 'opened_hour_lunch',
      isEditable: true
    },
    {
      title: 'Heure fermeture déjeuner',
      keyToDisplay: 'closed_hour_lunch',
      isEditable: true
    },
    {
      title: 'Heure ouverture dîner',
      keyToDisplay: 'opened_hour_diner',
      isEditable: true
    },
    {
      title: 'Heure fermeture dîner',
      keyToDisplay: 'closed_hour_diner',
      isEditable: true
    },
  ];

  reservation:Item[] = [];
  reservationColumns:Column[] = [
    {
      title: 'ID',
      keyToDisplay: 'id',
      isEditable: true
    },
    {
      title: 'Date',
      keyToDisplay: 'reservation_date',
      isEditable: true
    },
    {
      title: 'Heure de réservation',
      keyToDisplay: 'reservation_hour',
      isEditable: true
    },
    {
      title: 'Nom',
      keyToDisplay: 'lastname',
      isEditable: true
    },
    {
      title: 'Prénom',
      keyToDisplay: 'firstname',
      isEditable: true
    },
    {
      title: 'Email',
      keyToDisplay: 'mail',
      isEditable: true
    },
    {
      title: 'Téléphone',
      keyToDisplay: 'phone_number',
      isEditable: true
    },
    {
      title: 'Nombre de couverts',
      keyToDisplay: 'seat',
      isEditable: true
    },
    {
      title: 'Allergies',
      keyToDisplay: 'allergie',
      isEditable: true
    },
    {
      title: 'Enregistré',
      keyToDisplay: 'is_registered',
      isEditable: true
    },
  ];

  updateShedule(params: EventParams) {
    const newEntry = params.item;
    // @ts-ignore
    newEntry[params.key] = params.newValue;

    this.serviceAPI.updateSchedule(
      newEntry.id, 
      newEntry.day as string,
      newEntry.opened_hour_lunch as string,
      newEntry.closed_hour_lunch as string,
      newEntry.opened_hour_diner as string,
      newEntry.closed_hour_diner as string
    )
  }

  ngOnInit(): void {
    this.serviceAPI
      .getMenu()
      .then(data => {
        this.menus = data
      })

    this.serviceAPI
      .getFoodList()
      .then(data => {
        this.foodList = data
      })

    this.serviceAPI
      .getSchedules()
      .then(data => {
        this.schedule = data
      })

    this.serviceAPI
      .getReservation()
      .then(data => {
        this.reservation = data
      })
  }
}
