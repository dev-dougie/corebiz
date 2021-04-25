import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CartContextProvider } from '../context/CartContext';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </div>
    </CartContextProvider>
  )
}

export default MyApp
