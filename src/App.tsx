import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Store } from "./pages/store/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/navbar/Navbar";
import Product from "./pages/product/Product";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
    <ShoppingCartProvider>
      <DarkModeContext.Consumer>
        {({ darkMode }) => (
          <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
        )}
      </DarkModeContext.Consumer>
    </ShoppingCartProvider>
  </DarkModeContextProvider>
  );
}

export default App;
