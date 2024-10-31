import { fireEvent } from '@testing-library/react';
import { RepositoryCard } from './RepositoryCard';
import { renderWithProviders } from '../../utils/test-utils';

const mockRepository = {
    id: 1,
    name: 'test-repo',
    description: 'Test description',
    html_url: 'https://github.com/test/repo',
    stargazers_count: 100,
    owner: {
        login: 'testuser',
        avatar_url: 'https://example.com/avatar.jpg',
    },
};

describe('RepositoryCard', () => {
    const mockOnRemove = jest.fn();
    const mockOnUpdate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('отображает информацию о репозитории', () => {
        const { getByText, getByAltText } = renderWithProviders(
            <RepositoryCard
                repository={mockRepository}
                onRemove={mockOnRemove}
                onUpdate={mockOnUpdate}
            />,
        );

        expect(getByText(mockRepository.name)).toBeInTheDocument();
        expect(getByText(mockRepository.description)).toBeInTheDocument();
        expect(getByAltText(mockRepository.owner.login)).toHaveAttribute(
            'src',
            mockRepository.owner.avatar_url,
        );
    });

    it('вызывает onRemove при нажатии на кнопку удаления', () => {
        const { getByLabelText } = renderWithProviders(
            <RepositoryCard
                repository={mockRepository}
                onRemove={mockOnRemove}
                onUpdate={mockOnUpdate}
            />,
        );

        fireEvent.click(getByLabelText('Удалить репозиторий'));
        expect(mockOnRemove).toHaveBeenCalledWith(mockRepository.id);
    });

    it('переключается в режим редактирования при нажатии на кнопку редактирования', () => {
        const { getByLabelText, getByLabelText: getByLabelTextAfterEdit } = renderWithProviders(
            <RepositoryCard
                repository={mockRepository}
                onRemove={mockOnRemove}
                onUpdate={mockOnUpdate}
            />,
        );

        fireEvent.click(getByLabelText('Редактировать репозиторий'));
        expect(getByLabelTextAfterEdit('Название:')).toBeInTheDocument();
    });
});
