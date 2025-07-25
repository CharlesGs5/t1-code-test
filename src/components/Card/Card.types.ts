import { ReactNode } from 'react';

export interface CardProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    image?: string;
    bordered?: boolean;
}
