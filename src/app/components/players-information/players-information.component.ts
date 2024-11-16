import { Component, inject } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-players-information',
  standalone: true,
  imports: [],
  templateUrl: './players-information.component.html',
  styleUrl: './players-information.component.css',
})
export class PlayersInformationComponent {
  githubService = inject(GithubService);
}
