import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { ApiService } from 'src/app/services/api/api.service';
import { SectionComponent } from '../../components/section/section.component';

type Item = {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
  imports: [
    SectionComponent,
    CardComponent,
    NgFor,
    NgIf
  ],
  standalone: true,
})

export class MenuPageComponent {
  constructor(private serviceAPI: ApiService) {}

  menus:Item[] = []

  ngOnInit(): void {
    this.serviceAPI
      .getMenu()
      .then(data => {
        this.menus = data
      })
  }
}


