import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    it('renderiza el texto correctamente', () => {
        render(<Button>Enviar</Button>);
        expect(screen.getByText('Enviar')).toBeInTheDocument();
    });

    it('ejecuta onClick al hacer clic', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Haz clic</Button>);
        fireEvent.click(screen.getByText('Haz clic'));
        expect(handleClick).toHaveBeenCalled();
    });

    it('muestra texto de carga si loading es true', () => {
        render(<Button loading>Enviando</Button>);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });
});
