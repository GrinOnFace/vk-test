import { createContext, useContext } from 'react';
import { RootStore, rootStore } from '../RootStore';

const StoreContext = createContext<RootStore>(rootStore);

export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore error');
    }
    return context;
};
