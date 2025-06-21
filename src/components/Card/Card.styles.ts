import { COLORS, SPACING, FONT, RADIUS } from '@/design/design-system';
import React from "react";

export const getCardStyle = (
    bordered: boolean = true
): React.CSSProperties => {
    return {
        backgroundColor: COLORS.background,
        border: bordered ? `1px solid ${COLORS.border}` : 'none',
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        fontFamily: FONT.family,
        color: COLORS.text,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '100%',
    };
};

export const cardSectionStyle: React.CSSProperties = {
    marginBottom: SPACING.md,
};

export const cardImageStyle: React.CSSProperties = {
    width: '100%',
    borderTopLeftRadius: RADIUS.md,
    borderTopRightRadius: RADIUS.md,
    objectFit: 'cover',
};
