import { CircularProgressProps } from '@mui/material';

export interface LoaderProps extends Partial<CircularProgressProps> {
    fullScreen?: boolean;
    fullContainer?: boolean;
}
