import { makeAutoObservable } from 'mobx';
import type { Repository } from '../types/types';

export class RepositoryStore {
    repositories: Repository[] = [];
    isLoading = false;
    error: string | null = null;
    hasMore = true;
    page = 1;
    searchQuery = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSearchQuery(query: string) {
        if (this.searchQuery === query) return;

        this.searchQuery = query;
        this.repositories = [];
        this.page = 1;
        this.hasMore = true;
        this.error = null;
    }

    setRepositories(repositories: Repository[]) {
        this.repositories = [...this.repositories, ...repositories];
    }

    clearRepositories() {
        this.repositories = [];
    }

    removeRepository(id: number) {
        this.repositories = this.repositories.filter((repo) => repo.id !== id);
    }

    updateRepository(id: number, updates: Partial<Repository>) {
        this.repositories = this.repositories.map((repo) =>
            repo.id === id ? { ...repo, ...updates } : repo,
        );
    }

    setLoading(loading: boolean) {
        this.isLoading = loading;
    }

    setError(error: string | null) {
        this.error = error;
    }

    setPage(number: number) {
        this.page = number;
    }

    nextPage() {
        if (!this.isLoading) {
            this.page += 1;
        }
    }

    get canLoadMore() {
        return !this.isLoading;
    }

    get isEmpty() {
        return this.repositories.length === 0;
    }

    get isInitialLoading() {
        return this.isLoading && this.isEmpty;
    }

    setHasMore(hasMore: boolean) {
        this.hasMore = hasMore;
    }

    incrementPage() {
        this.page += 1;
    }
}

export const repositoryStore = new RepositoryStore();
