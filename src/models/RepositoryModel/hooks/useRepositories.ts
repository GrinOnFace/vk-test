import { useCallback, useEffect, useRef } from 'react';
import { fetchGithubRepositories } from '../api/RepositoryModel.api';
import { REPOSITORY_MESSAGES } from '../constants/constants';
import { useStore } from '@/store';
import type { Repository } from '../types/types';

export const useRepositories = () => {
    const { repositoryStore } = useStore();

    const observer = useRef<IntersectionObserver | null>(null);

    const loadRepositories = useCallback(async () => {
        repositoryStore.setLoading(true);
        repositoryStore.setError(null);

        try {
            const newRepositories = await fetchGithubRepositories(
                repositoryStore.page,
                repositoryStore.searchQuery,
            );
            repositoryStore.setRepositories(newRepositories);
            repositoryStore.setHasMore(newRepositories.length > 0);
        } catch (err) {
            repositoryStore.setError(
                err instanceof Error ? err.message : REPOSITORY_MESSAGES.DEFAULT_ERROR,
            );
        } finally {
            repositoryStore.setLoading(false);
        }
    }, [repositoryStore]);

    const lastRepositoryRef = useCallback(
        (node: HTMLDivElement) => {
            if (repositoryStore.isLoading) return;

            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && repositoryStore.hasMore) {
                    repositoryStore.incrementPage();
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [repositoryStore],
    );

    const removeRepository = useCallback(
        (id: number) => {
            repositoryStore.removeRepository(id);
        },
        [repositoryStore],
    );

    const updateRepository = useCallback(
        (id: number, updates: Partial<Repository>) => {
            repositoryStore.updateRepository(id, updates);
        },
        [repositoryStore],
    );

    useEffect(() => {
        loadRepositories();
    }, [repositoryStore.page, repositoryStore.searchQuery]);

    return {
        repositories: repositoryStore.repositories,
        isLoading: repositoryStore.isLoading,
        error: repositoryStore.error,
        hasMore: repositoryStore.hasMore,
        lastRepositoryRef,
        removeRepository,
        updateRepository,
    };
};
