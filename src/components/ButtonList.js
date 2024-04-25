import React from 'react';
import Button from './Button';

const list = ["All", "etc", "etc"];
const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Cooking"/>
        <Button name="Live"/>
        <Button name="Valorant"/>
        <Button name="Rocket League"/>
        <Button name="Party Animals"/>
        <Button name="Apex Legends"/>
        <Button name="Cricket"/>
    </div>
  )
}

export default ButtonList;