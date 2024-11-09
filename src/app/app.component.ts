import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from './services/github.service';
import { PrizesComponent } from './components/prizes/prizes.component';
import { PlayersInformationComponent } from './components/players-information/players-information.component';
import { PlayersListComponent } from './components/players-list/players-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrizesComponent,
    PlayersInformationComponent,
    PlayersListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'github-raffle';

  ngOnInit() {}
}
