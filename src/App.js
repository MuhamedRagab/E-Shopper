import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import TrandyProducts from "./Components/TrandyProducts/TrandyProducts";
import StayUpdated from "./Components/StayUpdated/StayUpdated";
import Vendor from "./Components/Vendor/Vendor";
import Footer from "./Components/Footer/Footer";
import ArrowUp from "./Components/ArrowUp/ArrowUp";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Products />
      <TrandyProducts title="Trandy Products" />
      <StayUpdated />
      <TrandyProducts title="Just Arrived" />
      <Vendor />
      <Footer />
      <ArrowUp />
    </div>
  );
}

export default App;
