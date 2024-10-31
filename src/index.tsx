import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/assets/variables.scss';

import { App } from './App';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

container.render(<RouterProvider router={router} />);
