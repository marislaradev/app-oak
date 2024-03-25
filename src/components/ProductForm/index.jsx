import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      values.value = values.value.replace(",", ".");
      values.value = parseFloat(values.value);

      await axios.post("http://localhost:3000/products", values);
      console.log("Produto cadastrado com sucesso!");

      navigate("/products");
    } catch (error) {
      console.error("Erro ao cadastrar o produto:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        value: "",
        available: false,
      }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Campo obrigatório";
        } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(values.name)) {
          errors.name = "Apenas texto é permitido";
        }
        if (!values.description) {
          errors.description = "Campo obrigatório";
        } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(values.description)) {
          errors.description = "Apenas texto é permitido";
        }
        if (!values.value) {
          errors.value = "Campo obrigatório";
        } else if (isNaN(parseFloat(values.value))) {
          errors.value = "Insira apenas números. Exemplo: 11.90";
        }
        return errors;
      }}
    >
      <Form action="#">
        <div className="mb-4">
          <h2 className="font-bold text-center mb-4 dark:text-gray-200">
            Cadastro de Produtos
          </h2>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Nome do produto:
          </label>
          <Field
            type="text"
            id="name"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="name"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Descrição do produto:
          </label>
          <Field
            type="text"
            id="description"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="description"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="value"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Valor do produto:
          </label>
          <Field
            type="text"
            id="value"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="value"
          />
          <ErrorMessage
            name="value"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="available"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Disponível para venda:
          </label>
          <Field
            as="select"
            id="available"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="available"
          >
            <option
              value={true}
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              sim
            </option>
            <option
              value={false}
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              não
            </option>
          </Field>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-greenBtn hover:bg-greenBtn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenOak transform transition-transform hover:scale-105"
        >
          Enviar
        </button>
      </Form>
    </Formik>
  );
}

export default ProductForm;
