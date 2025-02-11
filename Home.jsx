import useFetch from "../../Utility/useFetch";
import Hero from "./Hero";
import ProductList from "./ProductList";
import Sale from "../Pages/Sale.jsx";
import Footer from "./Footer.jsx";
import EndBanner from "./EndBanner.jsx";

const Home = () => {
  const { data, loading } = useFetch('https://dummyjson.com/products');
  
  if (loading) {
    return <div>Loading...</div>;  // Show a loading indicator while the data is being fetched
  }

  return (
    <div style={{ width: '100%', boxSizing: 'border-box', margin: '0px', overflowX: 'hidden' }}>
      <Hero />
      <ProductList title={'NEW COLLECTIONS'} items={data.products} mul={0} />
      <Sale />
      <ProductList title={'TOP PURCHASE'} items={data.products} mul={5} />
      <EndBanner />
      <Footer />
    </div>
  );
};

export default Home;
