
import { useParams } from 'react-router-dom';

const VideoPlay = () => {
  const { videoId } = useParams(); 
  
  return (
    <div className="p-4">
      
      <div className="w-full aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

     
      <h2 className="mt-4 text-2xl font-bold">
        Video Title
        </h2>
      <p className="text-gray-600 mt-2">
        Channel Name
        </p>
      <p className="text-gray-800 mt-4">
        Video Description
        </p>
    </div>
  );
};

export default VideoPlay;



