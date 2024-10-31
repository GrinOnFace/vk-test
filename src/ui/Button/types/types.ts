import { ButtonHTMLAttributes } from 'react';
import { BUTTON_VARIANTS } from '../constants/constants';

type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
}
