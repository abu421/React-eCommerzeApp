import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menuItem';

const Directory = ({catego}) => {
  return (
    <div className='directory-menu'>
        {
            catego.map( ({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            ))
        }
    </div>
)
};

export default Directory;

