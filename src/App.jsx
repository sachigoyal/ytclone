
import './App.css'
import SearchBar from './components/SearchBar'
import youtubeApi from './api/youtube'
import { useState } from 'react'
import VideoCard from './components/VideoCard'


function App() {
 const [videos, setVideos] = useState([])

   const onSearch = async (keyword) => {
    try {
      const response = await youtubeApi.get("/search", {
        params: {
          q: keyword
        }
      })
      //console.log(response.data)
     //console.log(setVideos(response.data.items))
     setVideos(response.data.items)
      //videos(response.data.items[0].id.videoId)
    } catch (error) {
      console.log ("err ", error)
    }
   }

  return (
    <>
      <SearchBar onSearch={onSearch}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {videos.map((video, index) => (
   <VideoCard 
   key={index} 
   video={video} />
  ))}
      </div>
    </>
  )
}

export default App
