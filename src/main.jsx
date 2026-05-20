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
import UsersDetails from './components/Users/UsersDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import postDetails from './components/Posts/postDetails.jsx';

const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())

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
          path:"users/:userId",
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          Component:UsersDetails,
        },
        {
          path:'posts',
          element:<Suspense fallback={<p>loading...</p>}>
            <Posts postPromise={postPromise}></Posts>
          </Suspense>,
        },
        {
          path:"posts/:postId",
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          Component:postDetails,
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
    },
    {
      path:'*',
      element:<div> <h1>not found : 404 </h1></div>
    }

  ])

createRoot(document.getElementById('root')).render(

  <StrictMode>
<RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
