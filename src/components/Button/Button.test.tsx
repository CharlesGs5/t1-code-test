import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    it('renders the text correctly', () => {
        render(<Button>Enviar</Button>);
        expect(screen.getByText('Enviar')).toBeInTheDocument();
    });

    it('executes onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Haz clic</Button>);
        fireEvent.click(screen.getByText('Haz clic'));
        expect(handleClick).toHaveBeenCalled();
    });

    it('displays loading text when loading is true', () => {
        render(<Button loading>Enviando</Button>);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });
});
