import { Component, inject } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { PlayersInformationComponent } from '../../components/players-information/players-information.component';
import { PlayersListComponent } from '../../components/players-list/players-list.component';
import { PrizeListComponent } from '../../components/prize-list/prize-list.component';
import { SortPriceListComponent } from '../../components/sort-price-list/sort-price-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-players-screen',
  standalone: true,
  imports: [
    PlayersInformationComponent,
    PlayersListComponent,
    PrizeListComponent,
    SortPriceListComponent,
  ],
  templateUrl: './all-players-screen.component.html',
  styleUrl: './all-players-screen.component.css',
})
export class AllPlayersScreenComponent {
  title = 'github-raffle';
  githubService = inject(GithubService);
  router = inject(Router);
  ngOnInit() {}

  refresh() {
    this.githubService.refresh();
  }
  startRaffle() {
    this.router.navigate(['/raffle']);
  }
}
