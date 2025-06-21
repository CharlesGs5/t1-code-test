import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
    it('does not render the modal when isOpen is false', () => {
        render(<Modal isOpen={false} onClose={() => {}} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders the modal when isOpen is true', () => {
        render(
            <Modal
                isOpen
                onClose={() => {}}
                header={<h2>Confirmación</h2>}
                body={<p>¿Estás seguro?</p>}
            />
        );
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText('¿Estás seguro?')).toBeInTheDocument();
    });

    it('calls onClose when clicking the overlay', () => {
        const onClose = jest.fn();

        const { container } = render(
            <Modal
                isOpen
                onClose={onClose}
                header={<h2>Salir</h2>}
                body={<p>¿Confirmar?</p>}
            />
        );

        fireEvent.click(container.firstChild as HTMLElement);
        expect(onClose).toHaveBeenCalled();
    });
});
