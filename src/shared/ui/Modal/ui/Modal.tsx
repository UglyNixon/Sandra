import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?:string,
    children?:ReactNode,
    border?:boolean,
    isOpen?:boolean,
    haveExit?:boolean,
    onClose?:()=>void,
    lazy?:boolean
}
const ANIMATION_DELAY = 300;

export const Modal = (props:ModalProps) => {
    const { theme } = useTheme();
    const {
        children,
        lazy = false,
        className,
        haveExit = false,
        onClose,
        border = false,
        isOpen = true,
    } = props;
    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const mods:Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };
    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    // lazy load component
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => { if (isOpen) setIsMounted(true); }, [isOpen]);
    if (lazy && !isMounted) return null;
    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [className, theme])}
                onClick={closeHandler}
            >

                <div className={cls.overlay}>
                    <div
                        className={`${cls.content} ${border && cls.border}`}
                        onClick={onContentClick}
                    >
                        {children}

                        {haveExit && (
                            <div
                                className={cls.exit}
                                onClick={closeHandler}
                            >
                                {/* eslint-disable-next-line i18next/no-literal-string */}
                                X
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
