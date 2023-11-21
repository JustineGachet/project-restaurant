import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

type Btn = {
  text: string;
  url: string;
}


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  standalone: true,

})
export class SectionComponent {

  @Input() title!: string;
  @Input() btn!: Btn;
  @Input() enableShowMoreByItemBtn?: boolean;
  

  constructor(private router: Router) {}


  onBtnClick() {
    if (!this.btn.url) return;
    this.router.navigate([this.btn.url]);
  }
}
