import React, { useEffect, useState } from 'react';
import useVideos from '../hooks/useVidoes';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [ videos, search ] = useVideos('');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ui eleven wide column">
            <VideoPlayer video={selectedVideo} />
          </div>
          <div className="ui five wide column">
            <VideoList 
              videos={videos} 
              onVideoSelect={video => setSelectedVideo(video)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;