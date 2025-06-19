import { COLORS } from '@/design/design-system';

export const getButtonStyles = (variant: string, disabled: boolean) => {
    const baseStyles = {
        padding: '8px 16px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 500,
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
    };

    const variants = {
        primary: {
            backgroundColor: COLORS.primary,
            color: COLORS.background,
        },
        secondary: {
            backgroundColor: COLORS.secondary,
            color: COLORS.background,
        },
        danger: {
            backgroundColor: COLORS.danger,
            color: COLORS.background,
        },
    };

    return {
        ...baseStyles,
        ...(variants[variant as keyof typeof variants] || variants.primary),
    };
};
