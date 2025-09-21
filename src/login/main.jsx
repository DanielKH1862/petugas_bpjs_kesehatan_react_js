import {createRoot} from 'react-dom/client';
import {strictMode} from 'react';
import Login from './login';

createRoot(document.getElementById('root'))
.render(
    <strictMode>
        <Login />
    </strictMode>
);
