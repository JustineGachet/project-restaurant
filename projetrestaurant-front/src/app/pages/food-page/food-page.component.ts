import { NgFor, NgIf } from '@angular/common';
import { isNgContainer } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { ApiService } from 'src/app/services/api/api.service';
import { SectionComponent } from '../../components/section/section.component';

type Item = {
  food_type:string;
  id: number;
  title: string;
  description: string;
  price: number;
  currency:string;
  image_url?: string;
}


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
  imports: [
    SectionComponent,
    CardComponent,
    NgFor,
    NgIf
  ],
  standalone: true,
})

export class FoodPageComponent {

  @Input() enableShowMoreByItemBtn?: boolean;

  constructor(private serviceAPI: ApiService) {}

  foodList:Item[] = []

  ngOnInit(): void {
    this.serviceAPI
      .getFoodList()
      .then(data => {
        this.foodList = data
        console.log(this.foodList)
      })
  }
}

