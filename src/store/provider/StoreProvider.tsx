import { type FC } from 'react';
import { rootStore } from '../RootStore';
import { StoreContext } from '../context/StoreContext';
import { StoreProviderProps } from '../types/types';

export const StoreProvider: FC<StoreProviderProps> = ({ children, store = rootStore }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
