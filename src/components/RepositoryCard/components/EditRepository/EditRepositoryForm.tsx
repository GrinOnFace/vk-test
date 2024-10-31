import { useState, type FC } from 'react';
import { Button, BUTTON_VARIANTS } from '@/ui/Button/index';
import { EDIT_FORM_CLASSES, EDIT_FORM_LABELS } from './constants/constants';
import * as styles from './EditRepositoryForm.module.scss';
import type { EditRepositoryFormProps } from './types/types';

export const EditRepositoryForm: FC<EditRepositoryFormProps> = ({
    repository,
    onSave,
    onCancel,
}) => {
    const [name, setName] = useState(repository.name);
    const [description, setDescription] = useState(repository.description);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(repository.id, { name, description });
    };

    return (
        <form className={styles[EDIT_FORM_CLASSES.form]} onSubmit={handleSubmit}>
            <div className={styles[EDIT_FORM_CLASSES.field]}>
                <label htmlFor='name'>{EDIT_FORM_LABELS.name}</label>
                <input
                    id='name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className={styles[EDIT_FORM_CLASSES.field]}>
                <label htmlFor='description'>{EDIT_FORM_LABELS.description}</label>
                <textarea
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                />
            </div>

            <div className={styles[EDIT_FORM_CLASSES.buttons]}>
                <Button type='submit' variant={BUTTON_VARIANTS.primary}>
                    {EDIT_FORM_LABELS.save}
                </Button>
                <Button variant={BUTTON_VARIANTS.secondary} onClick={onCancel}>
                    {EDIT_FORM_LABELS.cancel}
                </Button>
            </div>
        </form>
    );
};
