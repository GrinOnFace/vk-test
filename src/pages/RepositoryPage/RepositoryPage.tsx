import { Header } from '@/components/Header/index';
import { RepositoriesModule } from '@/models/RepositoryModel/index';
import { REPOSITORY_PAGE_CLASSES, REPOSITORY_PAGE_LABELS } from './constants/constants';
import * as styles from './RepositoryPage.module.scss';

export const RepositoryPage = () => {
    return (
        <div className={styles[REPOSITORY_PAGE_CLASSES.page]}>
            <Header title={REPOSITORY_PAGE_LABELS.title} />
            <main className={styles[REPOSITORY_PAGE_CLASSES.main]}>
                <RepositoriesModule />
            </main>
        </div>
    );
};
