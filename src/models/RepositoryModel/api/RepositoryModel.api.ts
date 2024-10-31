import axios from 'axios';
import { REPOSITORY_API } from '../constants/constants';
import type { GithubResponse } from '../types/types';

export const fetchGithubRepositories = async (page: number, searchQuery?: string) => {
    const params = new URLSearchParams({
        q: searchQuery
            ? `${searchQuery} ${REPOSITORY_API.DEFAULT_QUERY}`
            : REPOSITORY_API.DEFAULT_QUERY,
        sort: REPOSITORY_API.SORT,
        order: 'desc',
        page: String(page),
        per_page: String(REPOSITORY_API.LIMIT),
    });

    const { data } = await axios.get<GithubResponse>(`${REPOSITORY_API.BASE_URL}?${params}`);

    return data.items;
};
