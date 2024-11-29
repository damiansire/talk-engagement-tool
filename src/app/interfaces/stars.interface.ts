export interface Player {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface StarredItem {
  starred_at: string;
  user: Player;
}

export interface GithubStarsResponse {
  data: StarredItem[];
  headers: {
    [header: string]: string;
  };
  status: number;
  url: string;
}
