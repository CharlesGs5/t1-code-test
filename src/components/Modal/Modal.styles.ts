import { COLORS, SPACING, RADIUS, FONT, Z_INDEX, MODAL_WIDTH } from '@/design/design-system';
import React from "react";

export const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundColor: COLORS.overlay,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: Z_INDEX.modal,
};

export const getModalContainerStyle = (size: keyof typeof MODAL_WIDTH): React.CSSProperties => ({
    width: '90%',
    maxWidth: MODAL_WIDTH[size],
    backgroundColor: COLORS.background,
    borderRadius: RADIUS.md,
    overflow: 'hidden',
    fontFamily: FONT.family,
    color: COLORS.text,
});

export const contentWrapperStyle: React.CSSProperties = {
    padding: SPACING.md,
};

export const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: FONT.size.lg,
    fontWeight: FONT.weight.medium,
};

export const closeButtonStyle: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: COLORS.text,
};

export const bodyStyle: React.CSSProperties = {
    marginTop: SPACING.sm,
    fontSize: FONT.size.base,
};

export const footerStyle: React.CSSProperties = {
    marginTop: SPACING.md,
    display: 'flex',
    gap: SPACING.sm,
    justifyContent: 'flex-end',
};
