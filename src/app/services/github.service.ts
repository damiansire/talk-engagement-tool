import { Injectable, signal } from '@angular/core';
import { request } from '@octokit/request';
import { GithubStarsResponse, StarredItem } from '../interfaces/stars.interface';
import { environment } from '../../../enviorements/enviorements';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  stars = signal<StarredItem[]>([]);
  repoData = signal<null | any>(null);

  defaultRepo = 'github-raffle';
  constructor() {
    this.refresh();
  }

  async getStars(owner = 'damiansire', repo = this.defaultRepo) {
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
          owner: owner,
          repo: repo,
          page: page,
          per_page: 200,
        })) as GithubStarsResponse;

        allStargazers = allStargazers.concat(result.data);

        const linkHeader = result.headers['link'];
        hasNextPage =
          linkHeader != undefined && linkHeader.includes('rel="next"');

        page++;
      }

      console.log(
        `The repository ${owner}/${repo} has ${allStargazers.length} stars.`
      );

      const finalResult = allStargazers.filter((x) => {
        const date = new Date(x.starred_at);
        return date.getDate() > 14;
      });

      this.stars.set(finalResult);
    } catch (error) {
      console.error('Error fetching repository stars:', error);
      this.stars.set([]);
    }
  }

  async getRepoData(owner = 'damiansire', repo = this.defaultRepo) {
    try {
      const result = await request('GET /repos/{owner}/{repo}', {
        headers: {
          authorization: `token ${environment.githubToken}`,
        },
        owner: owner,
        repo: repo,
      });

      this.repoData.set(result.data);
    } catch (error) {
      console.error('Error fetching repository stars:', error);
    }
  }

  async refresh() {
    this.getStars();
    this.getRepoData();
  }
}
