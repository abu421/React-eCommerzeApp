import React, {useState} from 'react';
import './previewCompo.scss';
import CollectionItem from '../collection-item/collectionItem-Compo';

const PreviewCollection = ({ title, items, cartItems, setCartItems  }) => {
    // const [cartItems, setCartItems] = useState([]); // setCartItems[...cartItems]

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                       <CollectionItem key={item.id} itemsDATA={item} cartItem={cartItems} setCartItem={setCartItems}/>
                    ))
                }
            </div>
        </div>
    )
};

export default PreviewCollection;