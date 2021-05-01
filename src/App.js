import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-Compo';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-Compo';
import Header from './components/header/header';
import SignPage from './pages/sign/sign';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/checkout';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]); // setCartItems[...cartItems]
  const [toggle, setToggle] = useState(false); // checkout dropdewn hidden
  const [CollectionID, setCollectionID] = useState([{title: 'hats', id: 1}, {title: 'sneakers', id :2},{title: 'jackets', id :3},{title:'womens', id:4},{title:'mens', id:5}]);
  const [catego, setCatego] = useState([
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]);
  console.log(catego)
  console.log(cartItems);

  useEffect(() => {

    // Anything in here is fired on component mount (componentDidMount)...
    // const{setCurrentUser} = this.props;
    const setUnsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        console.log(currentUser);
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
        // Anything in here is fired on component unmount (componentWillUnmount)..
        setUnsubscribeFromAuth();
    };

    },[]);
    
    
  return (
    <div className='box-container'>
      <Header currentUser={currentUser} cartItem={cartItems} setCartItem={setCartItems} togle={toggle} setTogle={setToggle}/>
      <Switch>
      <Route exact path="/">
        <HomePage categories={catego}/>
      </Route>

      <Route path="/shop">
        <ShopPage cartItem={cartItems} setCartItem={setCartItems} categories={catego} CollectionID={CollectionID}/>
      </Route>

      <Route exact path="/checkout">
        <CheckoutPage cartItem={cartItems} setCartItem={setCartItems} togle={toggle} setTogle={setToggle} />
      </Route>

      <Route exact path="/signin">
        <SignPage/>
      </Route>
    </Switch>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });
// export default connect(null, mapDispatchToProps)(App);

export default App;
