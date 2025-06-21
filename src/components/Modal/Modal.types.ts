import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'small' | 'medium' | 'large';
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    image?: string;
}
