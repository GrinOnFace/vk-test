import { memo, useState } from 'react';
import { EditRepositoryForm } from './components/EditRepository/index';
import { REPOSITORY_CARD_CLASSES, REPOSITORY_CARD_ICONS } from './constants/constants';
import * as styles from './RepositoryCard.module.scss';
import type { RepositoryCardProps } from './types/types';

export const RepositoryCard = memo(({ repository, onRemove, onUpdate }: RepositoryCardProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const { id, owner, name, description, html_url, stargazers_count } = repository;
    const { avatar_url, login } = owner;

    if (isEditing) {
        return (
            <EditRepositoryForm
                repository={repository}
                onSave={(id, updates) => {
                    onUpdate(id, updates);
                    setIsEditing(false);
                }}
                onCancel={() => setIsEditing(false)}
            />
        );
    }

    return (
        <div className={styles[REPOSITORY_CARD_CLASSES.card]}>
            <img src={avatar_url} alt={login} className={styles[REPOSITORY_CARD_CLASSES.avatar]} />
            <div className={styles[REPOSITORY_CARD_CLASSES.content]}>
                <div className={styles[REPOSITORY_CARD_CLASSES.header]}>
                    <h3 className={styles[REPOSITORY_CARD_CLASSES.title]}>
                        <a href={html_url} target='_blank' rel='noopener noreferrer'>
                            {name}
                        </a>
                    </h3>
                    <div className={styles[REPOSITORY_CARD_CLASSES.actions]}>
                        <button
                            className={styles[REPOSITORY_CARD_CLASSES.editButton]}
                            onClick={() => setIsEditing(true)}
                            aria-label='Редактировать репозиторий'
                        >
                            {REPOSITORY_CARD_ICONS.edit}
                        </button>
                        <button
                            className={styles[REPOSITORY_CARD_CLASSES.removeButton]}
                            onClick={() => onRemove(id)}
                            aria-label='Удалить репозиторий'
                        >
                            {REPOSITORY_CARD_ICONS.remove}
                        </button>
                    </div>
                </div>
                <p className={styles[REPOSITORY_CARD_CLASSES.description]}>{description}</p>
                <div className={styles[REPOSITORY_CARD_CLASSES.info]}>
                    <span>
                        {REPOSITORY_CARD_ICONS.star} {stargazers_count}
                    </span>
                    <span>
                        {REPOSITORY_CARD_ICONS.user} {login}
                    </span>
                </div>
            </div>
        </div>
    );
});

RepositoryCard.displayName = 'RepositoryCard';
