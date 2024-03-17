
import { useDispatch } from 'react-redux';
import Footer from './components/Footer'
import Header from './components/Header'

import { itemsActions } from './store/itemsSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import FloatingCart from './components/FloatingCart';



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      dispatch(itemsActions.addInitialItems(data.products))
    })
  }, [])

  return (
    <>
     <Header />
     <FloatingCart />
     <Outlet></Outlet>
     <Footer />
    </>
  )
}

export default App
