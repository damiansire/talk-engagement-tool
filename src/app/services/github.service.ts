import { Injectable, signal } from '@angular/core';
import { request } from '@octokit/request';
import { environment } from '../../../enviorements/enviorements';
import { starsMock } from './stars.mock';
import { GithubStarsResponse, StarredItem } from '../interface/stars.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  stars = signal<StarredItem[]>([]);

  constructor() {
    this.getStars();
  }

  async getStars(owner = 'damiansire', repo = 'angular-examples') {
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

      this.stars.set(allStargazers);
    } catch (error) {
      console.error('Error fetching repository stars:', error);
      this.stars.set([]);
    }
  }

  async getRepoData(owner = 'damiansire', repo = 'angular-examples') {
    try {
      const result = await request('GET /repos/{owner}/{repo}', {
        headers: {
          authorization: `token ${environment.githubToken}`,
        },
        owner: owner,
        repo: repo,
      });

      console.log(`The repository ${owner}/${repo} has ${result.data} stars.`);
      return result.data;
    } catch (error) {
      console.error('Error fetching repository stars:', error);
      return '';
    }
  }
}
