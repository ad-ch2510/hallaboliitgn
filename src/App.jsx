import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'
import Footer from './component/Footer'
import { createHashRouter, RouterProvider  } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop'
import Badminton from './pages/gamesDescription/Badminton';
import Footsal from './pages/gamesDescription/Futsal';
import Carrom from './pages/gamesDescription/Carrom'
import Dodgeball from './pages/gamesDescription/Dodgeball'
import FootVolley from './pages/gamesDescription/FootVolley'
import Frisbee from './pages/gamesDescription/Frisbee'
import GullyCricket from './pages/gamesDescription/GullyCricket'
import SevenStones from './pages/gamesDescription/SevenStones'
import KhoKho from './pages/gamesDescription/KhoKho'
import Throwball from './pages/gamesDescription/Throwball'
import TugOfWar from './pages/gamesDescription/TugOfWar'

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><ScrollToTop/><Footer/></>
    },
    {
      path: "/games",
      element: <><Navbar/><Register/><ScrollToTop/><Footer/></>
    },
    {
      path: "/sponsors",
      element: <><Navbar/><Sponsors/><ScrollToTop/><Footer/></>
    },
    {
      path: "/Our-team",
      element: <><Navbar/><Team/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/badminton",
      element:<><Navbar/><Badminton/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/futsal",
      element:<><Navbar/><Footsal/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/carrom",
      element:<><Navbar/><Carrom/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/dodgeball",
      element:<><Navbar/><Dodgeball/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/foot-volley",
      element:<><Navbar/><FootVolley/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/frisbee",
      element:<><Navbar/><Frisbee/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/gully-cricket",
      element:<><Navbar/><GullyCricket/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/seven-stones",
      element:<><Navbar/><SevenStones/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/kho-kho",
      element:<><Navbar/><KhoKho/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/throwball",
      element:<><Navbar/><Throwball/><ScrollToTop/><Footer/></>
    },
    {
      path:"/games/tug-of-war",
      element:<><Navbar/><TugOfWar/><ScrollToTop/><Footer/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
