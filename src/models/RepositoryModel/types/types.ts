export interface Repository {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

export interface UseRepositoriesResult {
    repositories: Repository[];
    isLoading: boolean;
    error: string | null;
    hasMore: boolean;
}

export interface GithubResponse {
    items: Repository[];
    total_count: number;
}
