// Replace with your actual API key
const GOOGLE_API_KEY = "AIzaSyC6D8f9d8kGX2SdtW0L3SV1u70xkBnyyvM";

// API endpoints
export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=250&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=225&key=" +
  GOOGLE_API_KEY + "&q=";

// API for fetching video statistics
export const YOUTUBE_VIDEO_STATS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=statistics&key=" + GOOGLE_API_KEY + "&id=";
