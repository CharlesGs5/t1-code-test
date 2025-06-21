import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
    it('renders header, body, and footer content', () => {
        render(
            <Card
                header={<div>Mi encabezado</div>}
                body={<p>Este es el cuerpo</p>}
                footer={<span>Este es el pie</span>}
            />
        );

        expect(screen.getByText('Mi encabezado')).toBeInTheDocument();
        expect(screen.getByText('Este es el cuerpo')).toBeInTheDocument();
        expect(screen.getByText('Este es el pie')).toBeInTheDocument();
    });

    it('displays the image if provided', () => {
        render(<Card image="/prueba.jpg" />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', '/prueba.jpg');
    });

    it('renders without errors when optional props are missing', () => {
        const { container } = render(<Card bordered={false} body="Sin borde" />);
        const card = container.firstChild as HTMLElement;
        expect(card).toHaveStyle('border: none');
    });
});
