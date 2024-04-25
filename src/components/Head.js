import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler =() =>{
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg' >
      <div className='flex col-span-1 ' > 
        <img onClick={()=>toggleMenuHandler()} 
        className='h-8 cursor-pointer' 
        alt ="menu" 
        src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />
        <a href='/'><img className='h-8 mx-2'alt ="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/1002px-Logo_of_YouTube_%282013-2015%29.svg.png?20160628134147"/> </a>
      </div>

        <div className='col-span-10 px-10' >
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full ' type="text" />
        <button className='border border-gray-400 px-5 py-2  rounded-r-full bg-gray-200' >
        🔍
        </button>
        </div>
        

        < div className='col-span-1'> 

             <img className='h-8' alt= "user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
         </div>
      
    </div>
      

    
  )
}

export default Head;