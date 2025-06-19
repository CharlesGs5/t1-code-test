import { ReactNode } from 'react';

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode;
    children: ReactNode;
    onClick?: () => void;
}
