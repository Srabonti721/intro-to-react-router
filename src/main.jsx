import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobile/Mobiles.jsx';
import Laptops from './components/Laptop/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users/Users2.jsx';
import UsersDetails from './components/Users/UsersDetails.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

  const router = createBrowserRouter([
    {
      path:"/",
      Component:Root,
      children:[
        {index:true, Component:Home},
        {path:"mobiles", Component:Mobiles},
        {path:"laptops", Component:Laptops},
        {
          path:"users",
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
           Component:Users
        },
        {
          path:"users3",
          element:<Suspense fallback={<p>loading ,,,</p>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
           
        },
        {
          path:"users/:userId",
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          Component:UsersDetails,
        }
      ]
    },
    {
      path:"/about", 
      element:<div>about me</div>
    },
    {
      path:"/blogs",
      element:<div>Blogs data</div>
    },
    {
    path:"/app",
    Component:App
    }

  ])

createRoot(document.getElementById('root')).render(

  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
