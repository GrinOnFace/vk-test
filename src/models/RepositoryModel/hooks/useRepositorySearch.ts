import { useCallback, useState } from 'react';
import { useStore } from '@/store';

export const useRepositorySearch = () => {
    const { repositoryStore } = useStore();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = useCallback((value: string) => {
        setSearchValue(value);
    }, []);

    const handleSubmitSearch = useCallback(() => {
        const trimmedValue = searchValue.trim();
        if (trimmedValue === repositoryStore.searchQuery) return;

        repositoryStore.setSearchQuery(trimmedValue);
    }, [searchValue, repositoryStore]);

    return {
        searchValue,
        handleSearch,
        handleSubmitSearch,
    };
};
