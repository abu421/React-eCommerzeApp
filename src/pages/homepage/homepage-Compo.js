import React from 'react';
import './homepage-Styles.scss';
import Directory from '../../components/directory/directory';

const HomePage = ({categories}) => {
    return (
        <div className='homepage'>
            <Directory catego={categories}/>
        </div>
    )
};

export default HomePage;