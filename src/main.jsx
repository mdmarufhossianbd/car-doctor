import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
import router from './Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
