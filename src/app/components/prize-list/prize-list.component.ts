import { Component, inject } from '@angular/core';
import { PrizesService } from '../../services/prizes.service';

@Component({
  selector: 'app-prize-list',
  standalone: true,
  imports: [],
  templateUrl: './prize-list.component.html',
  styleUrl: './prize-list.component.css',
})
export class PrizeListComponent {
  prizesService = inject(PrizesService);
}
