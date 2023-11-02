import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layour from './Component/Layour/Layour';
import Home from './Component/Home/Home.jsx';
import MyWorks from './Component/MyWorks/MyWorks.jsx';
import AboutMe from './Component/AboutMe/AboutMe.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import 'animate.css';

const route = createHashRouter([

  {
    path: '/', element: <Layour />, children: [
      {
        index: true, element:
          <Home />
      },
      {
        path: 'Home', element:
          <Home />
      },
      {
        path: 'MyWorks', element:
          <MyWorks />
      },

      {
        path: 'AboutMe', element:
          <AboutMe />
      },

      { path: '*', element: <NotFound /> },


    ]
  }



])





export default function App() {


  return <>
   


        <RouterProvider router={route} />


    
  </>

}
