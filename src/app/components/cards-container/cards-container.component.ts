import { Component, Input } from '@angular/core';
import { CardData } from '../../data/data-fake';
import { BigCardComponent } from "../big-card/big-card.component";
import { SmallCardComponent } from "../small-card/small-card.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cards-container',
    standalone: true,
    templateUrl: './cards-container.component.html',
    styleUrl: './cards-container.component.css',
    imports: [BigCardComponent, SmallCardComponent, CommonModule]
})
export class CardsContainerComponent {
  @Input() cards: CardData[] = [];
  @Input() flip: boolean = false;

  get firstCard(): CardData {
    return this.cards[0];
  }

  get lastCard(): CardData {
    return this.cards[this.cards.length-1];
  }
}
