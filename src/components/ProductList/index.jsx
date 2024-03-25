import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const sortedProducts = response.data.sort((a, b) => a.value - b.value);
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="font-bold text-center mb-4 dark:text-gray-200">
        Lista de Produtos
      </h2>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="rounded-md px-4 py-2">Nome</th>
            <th className="px-4 py-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              <td className="border px-4 py-2">
                {product.name} - {product.description}
              </td>
              <td className="border px-4 py-2">{product.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to="/"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-greenBtn hover:bg-greenBtn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenOak transform transition-transform hover:scale-105 mt-4"
      >
        Cadastrar Novo Produto
      </Link>
    </div>
  );
}

export default ProductList;
