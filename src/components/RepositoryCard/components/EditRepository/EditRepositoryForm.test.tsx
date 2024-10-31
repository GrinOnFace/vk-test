import { fireEvent } from '@testing-library/react';
import { EditRepositoryForm } from './EditRepositoryForm';
import { renderWithProviders } from '../../../../utils/test-utils';
import { EDIT_FORM_LABELS } from './constants/constants';

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

describe('EditRepositoryForm', () => {
    const mockOnSave = jest.fn();
    const mockOnCancel = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('отображает форму с предзаполненными значениями', () => {
        const { getByLabelText } = renderWithProviders(
            <EditRepositoryForm
                repository={mockRepository}
                onSave={mockOnSave}
                onCancel={mockOnCancel}
            />,
        );

        const nameInput = getByLabelText(EDIT_FORM_LABELS.name) as HTMLInputElement;
        const descriptionInput = getByLabelText(
            EDIT_FORM_LABELS.description,
        ) as HTMLTextAreaElement;

        expect(nameInput.value).toBe(mockRepository.name);
        expect(descriptionInput.value).toBe(mockRepository.description);
    });

    it('вызывает onSave с обновленными данными при отправке формы', () => {
        const { getByLabelText, getByText } = renderWithProviders(
            <EditRepositoryForm
                repository={mockRepository}
                onSave={mockOnSave}
                onCancel={mockOnCancel}
            />,
        );

        const nameInput = getByLabelText(EDIT_FORM_LABELS.name);
        const descriptionInput = getByLabelText(EDIT_FORM_LABELS.description);
        const saveButton = getByText(EDIT_FORM_LABELS.save);

        fireEvent.change(nameInput, { target: { value: 'new-name' } });
        fireEvent.change(descriptionInput, { target: { value: 'new description' } });
        fireEvent.click(saveButton);

        expect(mockOnSave).toHaveBeenCalledWith(mockRepository.id, {
            name: 'new-name',
            description: 'new description',
        });
    });

    it('вызывает onCancel при нажатии на кнопку отмены', () => {
        const { getByText } = renderWithProviders(
            <EditRepositoryForm
                repository={mockRepository}
                onSave={mockOnSave}
                onCancel={mockOnCancel}
            />,
        );

        fireEvent.click(getByText(EDIT_FORM_LABELS.cancel));
        expect(mockOnCancel).toHaveBeenCalled();
    });
});
