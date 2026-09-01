import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { githubInfoLoader } from './Components/Github/Github.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />}>

        <Route path = "" element = {<Home />}></Route>

        <Route path = "about" element = {<About />}></Route>

        <Route path = "contact" element = {<Contact/>}></Route>

        <Route path="user/:userid" element={<User />} />

        <Route
          loader={githubInfoLoader}
          path="github"
          element={<Github />}></Route>

    </Route>
  )
)
  

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
