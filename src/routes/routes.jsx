import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../views/Home/home';
import Detail from "../views/Detail/Detail";
import Error404 from "../views/Error404/error404";
import Profile from "../views/Profile/profile/";
import LikedEvents from "../views//Profile/components/LikedEvents/likedEvents";
import MyInfo from "../views/Profile/components/MyInfo/myInfo"
import { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Error404/>
  },
  {
    path:'/detail/:eventId',
    element:(
      <Suspense fallback={<div>Cargando...</div>}>
        <ErrorBoundary fallback={<div>
          Ha ocurrido un erroral obtener el detalle
        </div>}>
          <Detail/>
        </ErrorBoundary>
      </Suspense>
    )
  },
  {
    path: '/profile',
    element:<Profile/>,
    children:[
        {
            path: 'my-info',
            element:<MyInfo/>
        },
        {
            path: 'liked-events',
            element:<LikedEvents/>
        }

    ]
  }

]);



const myRoutes = () =>  <RouterProvider router={router} />;



export default myRoutes;
