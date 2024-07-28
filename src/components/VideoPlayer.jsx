import ReactPlayer from 'react-player';
import React from 'react';

const VideoPlayer = () => {


  return (
  <div className='video_container' style={{margin:'auto',border:'1px soled red',width:'100vh',marginBottom:'15px'}}>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=bZLZHN8mCMI"
         controls={true}
         playing={false}
        />
    
    </div>
  );
}

export default VideoPlayer;