import React, { useState } from 'react';
import './shop-Compo.scss';
import Shop_Data from './shop.data'; // array of data
import CollectionOverview from '../../components/collectionsOverview/Collection-overview';
import { Route, withRouter } from 'react-router-dom';
import CollectionPage from '../collection/collection';
import collection from '../collection/collection';


const ShopPage = ({cartItem, setCartItem, CollectionID, match}) => {
    console.log(match);
    console.log(CollectionID)
    const [collections, setCollections] = useState(Shop_Data);

    return (
        <div className='shop-page'>
            
            <Route exact path={`${match.path}`}>
                <CollectionOverview collections_Items={collections} cartItm={cartItem} setCartItm={setCartItem} />
            </Route>

            <Route path={`${match.path}/:collectionId`}>
                <CollectionPage DATA={collections} CollID={CollectionID} cartITM={cartItem} setCartITM={setCartItem}/>
            </Route>

            

        </div>
    )
};

export default withRouter(ShopPage);