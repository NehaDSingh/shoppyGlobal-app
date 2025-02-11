import ProductList from "./ProductList";
import useFetch from "../../Utility/useFetch";

const Shop = () => {
  const { data, loading } = useFetch('https://dummyjson.com/products');

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <ProductList title={'Beauty Essence'} items={data} mul={0} />
      <ProductList title={'Fragrances'} items={data} mul={5} />
      <ProductList title={'Furniture'} items={data} mul={10} />
      <ProductList title={'Groceries'} items={data} mul={15} />
      <ProductList title={'Home Appliances'} items={data} mul={20} />
    </div>
  );
}

export default Shop;
