import { FC, KeyboardEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { GitHubIcon, SearchIcon } from '@/ui/icons/index';
import { useRepositorySearch } from '@/models/RepositoryModel/hooks/useRepositorySearch';
import { HEADER_CLASSES, HEADER_LABELS } from './constants/constants';
import * as styles from './Header.module.scss';
import type { HeaderProps } from './types/types';

export const Header: FC<HeaderProps> = observer(({ title }) => {
    const { searchValue, handleSearch, handleSubmitSearch } = useRepositorySearch();

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmitSearch();
        }
    };

    return (
        <header className={styles[HEADER_CLASSES.header]}>
            <div className={styles[HEADER_CLASSES.container]}>
                <div className={styles[HEADER_CLASSES.leftSection]}>
                    <GitHubIcon className={styles[HEADER_CLASSES.logo]} />
                    <h1 className={styles[HEADER_CLASSES.title]}>
                        {title || HEADER_LABELS.defaultTitle}
                    </h1>
                </div>

                <div className={styles[HEADER_CLASSES.rightSection]}>
                    <div className={styles[HEADER_CLASSES.searchContainer]}>
                        <SearchIcon className={styles[HEADER_CLASSES.searchIcon]} />
                        <input
                            type='text'
                            value={searchValue}
                            onChange={(e) => handleSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder={HEADER_LABELS.searchPlaceholder}
                            className={styles[HEADER_CLASSES.searchInput]}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
});
