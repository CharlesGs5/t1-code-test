import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
    it('renderiza el header, body y footer si se proporcionan', () => {
        render(
            <Card
                header={<h2>Mi encabezado</h2>}
                body={<p>Este es el cuerpo</p>}
                footer={<span>Este es el pie</span>}
            />
        );

        expect(screen.getByText('Mi encabezado')).toBeInTheDocument();
        expect(screen.getByText('Este es el cuerpo')).toBeInTheDocument();
        expect(screen.getByText('Este es el pie')).toBeInTheDocument();
    });

    it('muestra la imagen si se proporciona', () => {
        render(<Card image="/prueba.jpg" />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', '/prueba.jpg');
    });

    it('renderiza sin borde si la prop "bordered" es false', () => {
        const { container } = render(<Card bordered={false} body="Sin borde" />);
        const card = container.firstChild as HTMLElement;
        expect(card).toHaveStyle('border: none');
    });
});
