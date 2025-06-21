import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
    it('no se muestra si isOpen es false', () => {
        render(<Modal isOpen={false} onClose={() => {}} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renderiza si isOpen es true', () => {
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

    it('llama onClose al hacer clic en el overlay', () => {
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
