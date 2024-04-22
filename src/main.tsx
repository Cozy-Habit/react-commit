import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Overview from './routes/overview';
import Detail from './routes/detail';
const router = createBrowserRouter([
  {
    path: "/:owner/:repo",
    element: <Overview />,
  },  
  {
    path: "/:owner/:repo/commits/:sha",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
