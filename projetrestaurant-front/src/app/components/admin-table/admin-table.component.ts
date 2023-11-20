import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import * as _ from 'lodash';


export type Item = {
  id: number;
  type?: string;
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  image_url?: string;
  is_exposed?: boolean;
  day?: string;
  opened_hour_lunch?: number | string;
  closed_hour_lunch?: number | string;
  opened_hour_diner?: number | string;
  closed_hour_diner?: number | string;
  reservation_date?: string;
  reservation_hour?: string;
  lastname?: string;
  firstname?: string;
  mail?: string;
  phone_number?: string;
  seat?: number;
  allergie?: string;
  is_registered?: boolean;
}

export type Column = {
  title: string;
  keyToDisplay: keyof Item;
  isEditable: boolean;
}

export type EventParams = {
  item: Item; 
  key: keyof Item; 
  newValue: string
}

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
  imports: [
    NgFor,
    NgIf
  ],
  standalone: true
})
export class AdminTableComponent {
  @Input() data!: Item[];
  @Input() columns!: Column[];

  // Déclation de l'event destiné au composant parent
  @Output() onUserEdit = new EventEmitter<EventParams>();

  // Fonction permettant d'envoyer les informations sur la zone qui a été modifié par l'utilisateur
  // et sur la nouvelle valeur qui a été édité
  private dataUpdated(item: Item, key: keyof Item, newValue: string) {
    this.onUserEdit.emit({ item, key, newValue });
  }

  // Fonction de temporisation déclencher lorsque une pause de au moins 500ms 
  // est faite entre deux touches sur le clavier
  debounceUserEditUpdate = _.debounce(this.dataUpdated, 500);

  // Appel fait par le DOM à chaque pression sur une touche pendant l'edition
  onCellEdit(line: Item, key: keyof Item, target: any) {
    this.debounceUserEditUpdate(line, key, target.innerHTML);
  }
}
