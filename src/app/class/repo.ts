export class Repo {
  id: number;
  name: string;
  clone_url: string;
  forks_count: number;
  full_name: string;
  created_at: string;
  html_url: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  }
}
