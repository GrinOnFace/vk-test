import { RepositoryStore } from './repositoryStore';

describe('RepositoryStore', () => {
    let store: RepositoryStore;

    beforeEach(() => {
        store = new RepositoryStore();
    });

    it('инициализируется с правильными значениями по умолчанию', () => {
        expect(store.repositories).toEqual([]);
        expect(store.isLoading).toBe(false);
        expect(store.error).toBeNull();
        expect(store.hasMore).toBe(true);
        expect(store.page).toBe(1);
        expect(store.searchQuery).toBe('');
    });

    it('корректно обновляет поисковый запрос', () => {
        store.setSearchQuery('react');
        expect(store.searchQuery).toBe('react');
        expect(store.page).toBe(1);
        expect(store.repositories).toEqual([]);
        expect(store.hasMore).toBe(true);
    });

    it('корректно добавляет репозитории', () => {
        const mockRepos = [
            {
                id: 1,
                name: 'repo1',
                description: 'Description 1',
                stargazers_count: 100,
                html_url: 'https://github.com/test/repo1',
                owner: { login: 'user1', avatar_url: 'https://avatar1.url' },
            },
            {
                id: 2,
                name: 'repo2',
                description: 'Description 2',
                stargazers_count: 200,
                html_url: 'https://github.com/test/repo2',
                owner: { login: 'user2', avatar_url: 'https://avatar2.url' },
            },
        ];

        store.setRepositories(mockRepos);
        expect(store.repositories).toEqual(mockRepos);
    });

    it('корректно удаляет репозиторий', () => {
        const mockRepos = [
            {
                id: 1,
                name: 'repo1',
                description: 'Description 1',
                stargazers_count: 100,
                html_url: 'https://github.com/test/repo1',
                owner: { login: 'user1', avatar_url: 'https://avatar1.url' },
            },
            {
                id: 2,
                name: 'repo2',
                description: 'Description 2',
                stargazers_count: 200,
                html_url: 'https://github.com/test/repo2',
                owner: { login: 'user2', avatar_url: 'https://avatar2.url' },
            },
        ];

        store.setRepositories(mockRepos);
        store.removeRepository(1);
        expect(store.repositories).toEqual([
            {
                id: 2,
                name: 'repo2',
                description: 'Description 2',
                stargazers_count: 200,
                html_url: 'https://github.com/test/repo2',
                owner: { login: 'user2', avatar_url: 'https://avatar2.url' },
            },
        ]);
    });

    it('корректно обновляет репозиторий', () => {
        const mockRepos = [
            {
                id: 1,
                name: 'repo1',
                description: 'Description 1',
                stargazers_count: 100,
                html_url: 'https://github.com/test/repo1',
                owner: { login: 'user1', avatar_url: 'https://avatar1.url' },
            },
            {
                id: 2,
                name: 'repo2',
                description: 'Description 2',
                stargazers_count: 200,
                html_url: 'https://github.com/test/repo2',
                owner: { login: 'user2', avatar_url: 'https://avatar2.url' },
            },
        ];

        store.setRepositories(mockRepos);
        store.updateRepository(1, { name: 'updated repo1' });
        expect(store.repositories[0].name).toBe('updated repo1');
    });
});
