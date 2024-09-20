import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API, YOUTUBE_VIDEO_STATS_API } from "../utils/contants";

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const [viewCounts, setViewCounts] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(query));
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.items || []);
        
        // Fetch view counts for each video
        const videoIds = data.items.map(video => video.id.videoId).join(',');
        if (videoIds) {
          const statsResponse = await fetch(YOUTUBE_VIDEO_STATS_API + videoIds);
          if (!statsResponse.ok) {
            throw new Error(`HTTP error! Status: ${statsResponse.status}`);
          }
          const statsData = await statsResponse.json();
          const statsMap = statsData.items.reduce((acc, item) => {
            acc[item.id] = item.statistics.viewCount;
            return acc;
          }, {});
          setViewCounts(statsMap);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      }
    };

    fetchVideos();
  }, [query]);

  const formatNumber = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M'; // Format as millions
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + 'K'; // Format as thousands
    } else {
      return num; // Return the number as-is for values less than 1000
    }
  };

  const handleVideoClick = (videoId) => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center space-y-9">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          videos.map((video) => {
            const viewCount = viewCounts[video.id.videoId] || 'N/A'; // Use view count from state or 'N/A'
            const formattedViewCount = formatNumber(parseInt(viewCount)); // Format the view count
            const channelTitle = video.snippet?.channelTitle || 'Unknown Channel'; // Handle undefined channelTitle

            return (
              <div 
                key={video.id.videoId} 
                className="video-card bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300 w-full max-w-md"
                onClick={() => handleVideoClick(video.id.videoId)}
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="rounded-t-lg w-full"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-center">{video.snippet.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 text-center">{video.snippet.description}</p>
                  <p className="text-xl text-black-900 font-medium text-center">{formattedViewCount} views</p>
                  <p className="text-xl text-red-600 font-bold text-center">{channelTitle}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
