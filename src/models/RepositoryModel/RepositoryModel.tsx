import { observer } from 'mobx-react-lite';
import { RepositoryCard } from '@/components/RepositoryCard/index';
import { Loader } from '@/ui/Loader/index';

import { REPOSITORY_CLASSES, REPOSITORY_MESSAGES } from './constants/constants';
import { useRepositories } from './hooks/useRepositories';
import * as styles from './RepositoryModel.module.scss';
import { Repository } from './types/types';

const RepositoriesModuleComponent = () => {
    const {
        repositories,
        isLoading,
        error,
        hasMore,
        lastRepositoryRef,
        removeRepository,
        updateRepository,
    } = useRepositories();

    const renderRepository = (repository: Repository, index: number) => {
        const ref = repositories.length === index + 1 ? lastRepositoryRef : undefined;

        return (
            <div key={repository.id} ref={ref}>
                <RepositoryCard
                    repository={repository}
                    onRemove={removeRepository}
                    onUpdate={updateRepository}
                />
            </div>
        );
    };

    return (
        <div className={styles[REPOSITORY_CLASSES.container]}>
            {error && <div className={styles[REPOSITORY_CLASSES.error]}>{error}</div>}

            <div className={styles[REPOSITORY_CLASSES.list]}>
                {repositories.map(renderRepository)}
            </div>

            {isLoading && (
                <div className={styles[REPOSITORY_CLASSES.loading]}>
                    <Loader />
                </div>
            )}

            {!isLoading && !hasMore && (
                <div className={styles[REPOSITORY_CLASSES.endMessage]}>
                    {REPOSITORY_MESSAGES.NO_MORE}
                </div>
            )}
        </div>
    );
};

export const RepositoriesModule = observer(RepositoriesModuleComponent);
