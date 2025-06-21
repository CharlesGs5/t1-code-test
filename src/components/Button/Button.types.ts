import React, { ReactNode } from 'react';

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode;
    children: ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
