import { products as initialState } from "./mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";


function App() {
  const [products] = useState(initialState);
  const { filterProducts} = useFilters()

  const filterdProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterdProducts} />
      <Footer />
    </ CartProvider>
  )
}

export default App
