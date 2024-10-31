import type { Repository } from '@/models/RepositoryModel/types/types';

export interface RepositoryCardProps {
    repository: Repository;
    onRemove: (id: number) => void;
    onUpdate: (id: number, updates: Partial<Repository>) => void;
}
