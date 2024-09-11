import DeliveryForm from "../../components/DeliveryForm";

function Home() {
  return (
      <section className="min-h-screen flex items-center justify-center w-full bg-greenOak dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
            PanVel Foz do Iguaçu - 584
          </h1>
          <DeliveryForm />
        </div>
      </section>
  );
}

export default Home;
