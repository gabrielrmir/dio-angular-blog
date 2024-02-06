import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { CardsContainerComponent } from "../../components/cards-container/cards-container.component";
import { CardData, dataFake } from '../../data/data-fake';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, CardsContainerComponent, CommonModule]
})
export class HomeComponent {
  cards: CardData[] = dataFake;
}
