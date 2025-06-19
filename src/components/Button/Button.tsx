'use client';

import React from 'react';
import { ButtonProps } from './Button.types';
import { getButtonStyles } from './Button.styles';

const Button = ({
                    variant = 'primary',
                    disabled = false,
                    loading = false,
                    icon,
                    children,
                    onClick,
                }: ButtonProps) => {
    const styles = getButtonStyles(variant, disabled);

    return (
        <button
            style={styles}
            onClick={onClick}
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
