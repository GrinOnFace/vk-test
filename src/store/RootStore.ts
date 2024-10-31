import { makeAutoObservable } from 'mobx';
import { RepositoryStore } from '@/models/RepositoryModel/store/repositoryStore';

export class RootStore {
    repositoryStore: RepositoryStore;

    constructor() {
        this.repositoryStore = new RepositoryStore();
        makeAutoObservable(this);
    }
}

export const rootStore = new RootStore();
