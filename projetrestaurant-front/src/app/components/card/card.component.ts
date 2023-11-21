import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';


type Btn = {
  text: string;
  url: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ]
})

export class CardComponent {

  @Input() type!: string;
  @Input() title!: string;
  @Input() text!: string;
  @Input() image?: string;
  @Input() price?: number;
  @Input() currency?: string;
  @Input() btn?: Btn;

  constructor(private router: Router) {}

// fonction de redirection quand on clique sur le bouton

  onBtnClick() {
    if (!this.btn?.url) return;
    this.router.navigate([this.btn.url]);
  }

// fonction de reformatage du prix

  formatedPrice() {
    const formatter = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: this.currency,
    });
    return this.price ? formatter.format(this.price): null;
  }
}
