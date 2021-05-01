import React from 'react';
import CartIcon from '../../components/cart-icon/cart-icon';
import './collection.scss';
import CollectionItem from '../../components/collection-item/collectionItem-Compo';
import { Route, withRouter } from 'react-router-dom';

const CollectionPage = ({DATA, CollID, cartITM, setCartITM, match}) => {
    // console.log('Coll Page');
    // console.log(DATA);
    // console.log(CollID);
    // console.log(match.params.collectionId);
    // const yy = CollID.find((x) => ( x.title === match.params.collectionId));
    // console.log(yy.id);console.log(yy.title);
    // console.log(DATA.find((x) => (x.id === yy.id)).items)
    
    const TITLE = CollID.find((x) => ( x.title === match.params.collectionId)).title;
    const retrieveItemCate = () => {
        const CategoryID = CollID.find((col) => ( col.title === match.params.collectionId));
        const Items = DATA.find((data) => (data.id === CategoryID.id)).items;
        return Items;
    }
    const DataItems = retrieveItemCate();

    return (
        <div className='collection-page'>
            <h2 className='title'>{TITLE}</h2>
            <div className='items'>
                {
                    DataItems.map(item => <CollectionItem key={item.id} itemsDATA={item} cartItem={cartITM} setCartItem={setCartITM}/>)
                }
            </div>
        </div>
    )
};

export default withRouter(CollectionPage);