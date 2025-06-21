'use client';

import { InputProps } from './Input.types';
import { getInputStyle } from './Input.styles';
import { useId } from 'react';

const Input = ({
                   type,
                   placeholder,
                   label,
                   disabled = false,
                   status = 'default',
               }: InputProps) => {
    const id = useId();

    return (
        <div style={{ width: '100%' }}>
            {label && (
                <label htmlFor={id} style={{ display: 'block', marginBottom: '8px' }}>
                    {label}
                </label>
            )}

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                style={getInputStyle(status, disabled)}
                aria-invalid={status === 'error'}
            />
        </div>
    );
};

export default Input;
