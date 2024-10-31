import { StoreProvider } from '@/store/index';
import { RepositoryPage } from '@/pages/RepositoryPage';

export const App = () => {
    return (
        <StoreProvider>
            <RepositoryPage />
        </StoreProvider>
    );
};
