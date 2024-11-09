import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from './services/github.service';
import { PlayersInformationComponent } from './components/players-information/players-information.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PrizeListComponent } from './components/prize-list/prize-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayersInformationComponent,
    PlayersListComponent,
    PrizeListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'github-raffle';

  ngOnInit() {}
}
