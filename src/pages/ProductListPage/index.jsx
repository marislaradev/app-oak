import ProductList from "../../components/ProductList";

function ProductListPage() {
  return (
    <section className="min-h-screen flex items-center justify-center w-full bg-greenOak dark:bg-gray-950">
      <div className="bg-white m-8 dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Oak Store
        </h1>
        <ProductList />
      </div>
    </section>
  );
}

export default ProductListPage;
