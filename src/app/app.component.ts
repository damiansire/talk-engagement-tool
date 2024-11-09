import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'github-raffle';

  private githubService = inject(GithubService);

  ngOnInit() {
    this.githubService.getStars().then((stars) => {
      console.log('Stars:', stars);
      // Do something with the stars data
    });
  }
}
