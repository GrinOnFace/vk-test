import type { Repository } from '@/models/RepositoryModel/types/types';

export interface EditRepositoryFormProps {
    repository: Repository;
    onSave: (id: number, updates: Partial<Repository>) => void;
    onCancel: () => void;
}
