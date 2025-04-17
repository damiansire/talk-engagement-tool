import { Injectable, signal } from '@angular/core';
import { request } from '@octokit/request';
import { GithubStarsResponse, StarredItem } from '../interfaces/stars.interface';
import { GithubRepo } from '../interfaces/repo.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  stars = signal<StarredItem[]>([]);
  repoData = signal<GithubRepo | null>(null);
  error = signal<string | null>(null);

  private readonly defaultRepo = 'github-raffle';
  private readonly defaultOwner = 'damiansire';

  constructor() {
    this.refresh();
  }

  async getStars(owner = this.defaultOwner, repo = this.defaultRepo) {
    try {
      let allStargazers: StarredItem[] = [];
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const result = (await request('GET /repos/{owner}/{repo}/stargazers', {
          headers: {
            authorization: `token ${environment.githubToken}`,
            Accept: 'application/vnd.github.star+json',
          },
          owner,
          repo,
          page,
          per_page: 200,
        })) as GithubStarsResponse;

        allStargazers = allStargazers.concat(result.data);
        const linkHeader = result.headers['link'];
        hasNextPage = linkHeader?.includes('rel="next"') ?? false;
        page++;
      }

      const finalResult = allStargazers.filter((x) => {
        const date = new Date(x.starred_at);
        return date.getDate() > 14;
      });

      this.stars.set(finalResult);
      this.error.set(null);
    } catch (error) {
      this.error.set('Error fetching repository stars');
      this.stars.set([]);
      console.error('Error fetching repository stars:', error);
    }
  }

  async getRepoData(owner = this.defaultOwner, repo = this.defaultRepo) {
    try {
      const result = await request('GET /repos/{owner}/{repo}', {
        headers: {
          authorization: `token ${environment.githubToken}`,
        },
        owner,
        repo,
      });

      this.repoData.set(result.data as GithubRepo);
      this.error.set(null);
    } catch (error) {
      this.error.set('Error fetching repository data');
      this.repoData.set(null);
      console.error('Error fetching repository data:', error);
    }
  }

  async refresh() {
    await Promise.all([this.getStars(), this.getRepoData()]);
  }
}
