import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
    if (!video || !video.snippet) return null; 
  
    const { title, thumbnails, channelTitle } = video.snippet;

    const videoId = video.id?.videoId
  
    return (
      <div className="p-4 border rounded shadow-md hover:shadow-lg transition-shadow duration-300">
         <Link to={`/video/${videoId}`}>
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full h-auto rounded"
        />
        </Link>
        <h3 className="mt-2 text-lg font-semibold">
          <Link to={`/video/${videoId}`}>
            {title}
          </Link>
        </h3>
  
        <p className="text-gray-600 text-sm">by {channelTitle}</p>
      </div>
    );
  };
  
  export default VideoCard;