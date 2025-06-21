import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
    it('renderiza correctamente con los props mínimos', () => {
        render(<Input type="text" placeholder="Escribe aquí" />);
        const input = screen.getByPlaceholderText('Escribe aquí');
        expect(input).toBeInTheDocument();
    });

    it('muestra el label si se proporciona', () => {
        render(<Input type="text" placeholder="Correo" label="Email" />);
        const label = screen.getByText('Email');
        expect(label).toBeInTheDocument();
    });

    it('aplica el estado de error visualmente', () => {
        render(
            <Input
                type="text"
                placeholder="Nombre"
                label="Nombre completo"
                status="error"
            />
        );
        const input = screen.getByPlaceholderText('Nombre');
        expect(input).toHaveStyle('border: 1px solid rgb(220, 38, 38)');
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });
});
