'use client';

import { ModalProps } from './Modal.types';
import { useEffect } from 'react';
import {
    bodyStyle,
    closeButtonStyle,
    contentWrapperStyle, footerStyle,
    getModalContainerStyle,
    headerStyle,
    overlayStyle
} from "@/components/Modal/Modal.styles";

const Modal = ({
                   isOpen,
                   onClose,
                   size = 'medium',
                   header,
                   body,
                   footer,
                   image,
               }: ModalProps) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const getSizeStyle = () => {
        switch (size) {
            case 'small':
                return { maxWidth: '300px' };
            case 'medium':
                return { maxWidth: '500px' };
            case 'large':
                return { maxWidth: '700px' };
            default:
                return {};
        }
    };

    return (
        <div role="dialog" aria-modal="true" style={overlayStyle} onClick={onClose}>
            <div style={getModalContainerStyle(size)} onClick={(e) => e.stopPropagation()}>
                {image && <img src={image} alt="Modal visual" style={{ width: '100%' }} />}

                <div style={contentWrapperStyle}>
                    {header && (
                        <div style={headerStyle}>
                            <div>{header}</div>
                            <button onClick={onClose} style={closeButtonStyle}>
                                ×
                            </button>
                        </div>
                    )}

                    {body && <div style={bodyStyle}>{body}</div>}

                    {footer && <div style={footerStyle}>{footer}</div>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
