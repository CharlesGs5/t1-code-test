'use client';

import React from 'react';
import { ButtonProps } from './Button.types';
import { getButtonStyles } from './Button.styles';
import {trackInteraction} from "@/services/trackingService";

const Button = ({
                    variant = 'primary',
                    disabled = false,
                    loading = false,
                    icon,
                    children,
                    onClick,
                }: ButtonProps) => {
    const styles = getButtonStyles(variant, disabled);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        trackInteraction('Button', 'click', variant);
        onClick?.(e);
    };

    return (
        <button
            style={styles}
            onClick={handleClick}
            disabled={disabled || loading}
        >
            {loading ? 'Cargando...' : (
                <>
                    {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

export default Button;
