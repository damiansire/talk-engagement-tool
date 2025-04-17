export interface GithubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    language: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        html_url: string;
    };
} 