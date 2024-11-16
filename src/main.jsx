
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoPlay from './VideoPlay/VideoPlay.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "/video/:videoId",
    element: <VideoPlay/>,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)