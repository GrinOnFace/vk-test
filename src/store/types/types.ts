import { PropsWithChildren } from 'react';
import { RootStore } from '../RootStore';

export interface StoreProviderProps extends PropsWithChildren {
    store?: RootStore;
}
