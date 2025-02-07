import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Product from "./components/Products/Product";
import ProductsList from "./components/Products/ProductsList";
import RefrigeratorsList from "./components/Warehouse/Refrigerators/RefrigeratorsList";
import ServicesList from "./components/Warehouse/Services/ServicesList";
import ShelvesList from "./components/Warehouse/Shelves/ShelvesList";
import RegisterForm from "./components/Forms/RegisterAndLogin/Register";
import LoginForm from "./components/Forms/RegisterAndLogin/Login";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      {/* <h1>Home Page</h1> */}
       {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <Product /> */}
      <ProductsList />
      {/* <RefrigeratorsList /> */}
      {/* <ServicesList /> */}
      {/* <ShelvesList /> */}
      {/* <Footer />  */}
    </>
  );
}

export default App;
