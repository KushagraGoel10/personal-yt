import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/contants";

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(query));
      const data = await response.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, [query]);

  return (
    <div className="video-results">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="video-thumbnail"
          />
          <div className="video-info">
            <h3 className="video-title">{video.snippet.title}</h3>
            <p className="video-description">{video.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
