import { fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { renderWithProviders } from '../../utils/test-utils';
import { HEADER_LABELS } from './constants/constants';

describe('Header', () => {
    it('отображает заголовок по умолчанию, если title не передан', () => {
        const { getByText } = renderWithProviders(<Header />);
        expect(getByText(HEADER_LABELS.defaultTitle)).toBeInTheDocument();
    });

    it('отображает переданный заголовок', () => {
        const customTitle = 'Тестовый заголовок';
        const { getByText } = renderWithProviders(<Header title={customTitle} />);
        expect(getByText(customTitle)).toBeInTheDocument();
    });

    it('обрабатывает ввод поиска', () => {
        const { getByPlaceholderText } = renderWithProviders(<Header />);
        const searchInput = getByPlaceholderText(HEADER_LABELS.searchPlaceholder);

        fireEvent.change(searchInput, { target: { value: 'react' } });
        expect(searchInput).toHaveValue('react');
    });
});
