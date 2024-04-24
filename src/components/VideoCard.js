import React from 'react'

const VideoCard = ({info}) => {

    
    
    if (!info) {
        return null; // or handle the case where info is undefined
      }


    const {snippet, statistics} = info;

    if (!snippet) {
        return null; // or handle the case where snippet is undefined
      }
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-80   shadow-lg '>
        <img className= 'rounded-md'src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2' >{title}</li>
            <li>{channelTitle}</li>
            {statistics && <li>{statistics.viewCount} views</li>}
        </ul>
    </div>
  )
}

export default VideoCard