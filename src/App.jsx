
import { useDispatch } from 'react-redux';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { itemsActions } from './store/itemsSlice';
import { useEffect } from 'react';


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
     <Home />
     <Footer />
    </>
  )
}

export default App
