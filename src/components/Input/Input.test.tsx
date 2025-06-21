import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
    it('renders the input correctly with minimum props', () => {
        render(<Input type="text" placeholder="Escribe aquí" />);
        const input = screen.getByPlaceholderText('Escribe aquí');
        expect(input).toBeInTheDocument();
    });

    it('displays the label if provided', () => {
        render(<Input type="text" placeholder="Correo" label="Email" />);
        const label = screen.getByText('Email');
        expect(label).toBeInTheDocument();
    });

    it('applies success styles when status is "error"', () => {
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
