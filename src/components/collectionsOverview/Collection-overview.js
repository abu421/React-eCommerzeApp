import React from 'react';
import CollectionItem from '../collection-item/collectionItem-Compo';
import './collOver.scss';
import PreviewCollection from '../previewCollection/previewCompo';

const CollectionOverview = ({collections_Items, cartItm, setCartItm}) => {
    return (
        <div className='collections-overview'>
        {
            collections_Items.map(({id, ...otherCollectionsProps}) => (
                <PreviewCollection key={id} {...otherCollectionsProps} cartItems={cartItm} setCartItems={setCartItm} />
            ))
        }
        </div>
    )
};

export default CollectionOverview;