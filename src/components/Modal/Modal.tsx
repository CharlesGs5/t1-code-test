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
import {trackInteraction} from "@/services/trackingService";

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
            trackInteraction('Modal', 'open'); // 👈 Tracking al abrir
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = () => {
        trackInteraction('Modal', 'close');
        onClose();
    };

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
        <div role="dialog" aria-modal="true" style={overlayStyle} onClick={handleClose}>
            <div style={getModalContainerStyle(size)} onClick={(e) => e.stopPropagation()}>
                {image && <img src={image} alt="Modal visual" style={{ width: '100%' }} />}

                <div style={contentWrapperStyle}>
                    {header && (
                        <div style={headerStyle}>
                            <div>{header}</div>
                            <button onClick={handleClose} style={closeButtonStyle}>
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
