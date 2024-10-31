export const REPOSITORY_API = {
    BASE_URL: 'https://api.github.com/search/repositories',
    LIMIT: 30,
    DEFAULT_QUERY: 'stars:>1',
    SORT: 'stars',
} as const;

export const REPOSITORY_MESSAGES = {
    NO_MORE: 'Больше результатов нет',
    DEFAULT_ERROR: 'An error occurred',
} as const;

export const REPOSITORY_CLASSES = {
    container: 'container',
    title: 'title',
    error: 'error',
    list: 'list',
    loading: 'loading',
    endMessage: 'endMessage',
} as const;
