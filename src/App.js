import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Accordion from "./components/Accordion";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import Demo from "./components/Demo";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery= lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const[userName, setUserName]=useState();

  useEffect(()=>{
    //authenctication
    const data={
      userName: "Aryan Raj",
    }
    setUserName(data.userName);
  },[])


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },{
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path : "/accordion",
        element : <Accordion/>
      },
      {
        path : "/cart",
        element: <Cart/>
      },
      {
        path: "/demo",
        element: <Demo/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
