import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { ApiService } from 'src/app/services/api/api.service';
import { SectionComponent } from '../../components/section/section.component';
import { ReservationPageComponent } from 'src/app/pages/reservation-page/reservation-page.component';
import { NgForOf } from '@angular/common';

type Item = {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    SectionComponent,
    CardComponent,
    NgForOf
  ],
  standalone: true,
})

export class HomePageComponent {
  constructor(private serviceAPI: ApiService) {}

  foodList:Item[] = []


  ngOnInit(): void {
    this.serviceAPI
      .getFoodList()
      .then(data => {
        this.foodList = data.slice(0, 3);
      })
  }

}
