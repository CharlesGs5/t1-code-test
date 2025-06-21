import { COLORS, SPACING, FONT, RADIUS } from '@/design/design-system';
import React from "react";

export const getInputStyle = (
    status: 'default' | 'error' | 'success' = 'default',
    disabled: boolean = false
): React.CSSProperties => {
    const base: React.CSSProperties = {
        padding: SPACING.md,
        borderRadius: RADIUS.md,
        fontSize: FONT.size.base,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
        backgroundColor: COLORS.background,
        outline: 'none',
        width: '100%',
        fontFamily: FONT.family,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'text',
    };

    const statusStyles = {
        default: {},
        error: {
            border: `1px solid ${COLORS.error}`,
            color: COLORS.error,
        },
        success: {
            border: `1px solid ${COLORS.success}`,
            color: COLORS.success,
        },
    };

    return {
        ...base,
        ...statusStyles[status],
    };
};
