import { createContext } from 'react';
import { RootStore, rootStore } from '../RootStore';

export const StoreContext = createContext<RootStore>(rootStore);
