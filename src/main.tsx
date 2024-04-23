import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Overview from './routes/overview';
import Detail from './routes/detail';
import Input from './routes/Input';
import handleSubmit from './handleSubmit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Input />,
    action: handleSubmit
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

///{default values}, environment variables, octokit

//{default repo selector}: 
//two input fields, as soon as button is clicked it is added to the URL as params