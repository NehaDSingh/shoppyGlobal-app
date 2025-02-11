import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Pages/Home.jsx';
import ProductList from './Component/Pages/ProductList.jsx';
import Cart from './Component/Pages/Cart.jsx';
import ProductDetail from './Component/Pages/ProductDetail.jsx';
import AppLayout from './Component/Pages/AppLayout.jsx';
import Shop from './Component/Pages/Shop.jsx';
import NotFound from './Component/Pages/NotFound.jsx';

function App() {
  const approutes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <NotFound />, // Moved outside of `children`
      children: [
        { path: '', element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'product-list', element: <ProductList /> },
        { path: 'cart', element: <Cart /> },
        { path: 'product-detail/:title', element: <ProductDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={approutes} />;
}

export default App;
