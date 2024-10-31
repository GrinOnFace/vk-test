import { type FC } from 'react';
import { BUTTON_CLASSES, BUTTON_VARIANTS } from './constants/constants';
import * as styles from './Button.module.scss';
import type { ButtonProps } from './types/types';

export const Button: FC<ButtonProps> = ({
    children,
    variant = BUTTON_VARIANTS.primary,
    type = 'button',
    onClick,
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            className={`${styles[BUTTON_CLASSES.button]} ${styles[variant]} ${className || ''}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};
