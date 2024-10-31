import { render } from '@testing-library/react';
import { StoreProvider } from '@/store';
import { RootStore } from '@/store/RootStore';

export function renderWithProviders(ui: React.ReactElement, { store = new RootStore() } = {}) {
    return {
        store,
        ...render(<StoreProvider store={store}>{ui}</StoreProvider>),
    };
}

export * from '@testing-library/react';
