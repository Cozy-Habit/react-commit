import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Overview from './routes/Overview';
import Detail from './routes/Detail';
import Index from './routes/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  }, 
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