import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/Store.js'

import Layout from './components/Layout'
import ProductCard from './components/ProductCard'
import CartList from './components/CartList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: ProductCard,
        },
        {
          path: "cartlist",
          Component: CartList,
        },
        {
          path: "about",
          Component: About,
        },
        { 
          path: "contact",
          Component: Contact,
        }
      ],
    },
  ],
  {
    basename: "/ReactEcommerceProjectReduxToolKit",
  }
);

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
<RouterProvider router={router} /> 
 </Provider>
)
