import { CircularProgress } from '@mui/material';
import { type FC } from 'react';

import * as styles from './Loader.module.scss';
import { LoaderProps } from './types/types';

export const Loader: FC<LoaderProps> = ({
    size = 40,
    color = 'primary',
    fullScreen = false,
    fullContainer = false,
    ...props
}) => {
    if (fullScreen) {
        return (
            <div className={styles.fullScreen}>
                <CircularProgress size={size} color={color} {...props} />
            </div>
        );
    }

    if (fullContainer) {
        return (
            <div className={styles.fullContainer}>
                <CircularProgress size={size} color={color} {...props} />
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <CircularProgress size={size} color={color} {...props} />
        </div>
    );
};
