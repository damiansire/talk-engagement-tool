import { Injectable } from '@angular/core';
import { request } from '@octokit/request';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor() {}

  async getStars(owner = 'damiansire', repo = 'angular-examples') {
    try {
      let allStargazers: any = [];
      let page = 1;
      let hasNextPage = true;

      while (hasNextPage) {
        const result = await request('GET /repos/{owner}/{repo}/stargazers', {
          headers: {
            authorization: `token ${environment.githubToken}`,
            Accept: 'application/vnd.github.star+json',
          },
          owner: owner,
          repo: repo,
          page: page, // Add page parameter
          per_page: 200, // Optionally increase per_page for efficiency
        });

        allStargazers = allStargazers.concat(result.data);

        // Check for next page using Link header
        const linkHeader = result.headers.link;
        hasNextPage =
          linkHeader != undefined && linkHeader.includes('rel="next"');

        page++;
      }

      console.log(
        `The repository ${owner}/${repo} has ${allStargazers.length} stars.`
      );
      return allStargazers;
    } catch (error) {
      console.error('Error fetching repository stars:', error);
      return [];
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
