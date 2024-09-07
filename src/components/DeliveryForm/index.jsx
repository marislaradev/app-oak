// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// function DeliveryForm() {
//   const handleSubmit = async (values, {resetForm}) => {
//     try {
//     const payload = { ...values };
//     if (!payload.numero_pedido) {
//       delete payload.numero_pedido;
//     }

//     await axios.post("http://localhost:3000/deliveries", payload);
//     console.log("Entrega registrada com sucesso!");
//     resetForm(); // Limpa o formulário após a submissão
//   } catch (error) {
//     console.error("Erro ao registrar a entrega:", error);
//   }
//   };

//   const validationSchema = Yup.object().shape({
//     data_entrega: Yup.date().required("Campo obrigatório"),
//     tipo_entrega: Yup.string().required("Campo obrigatório"),
//     numero_pedido: Yup.string(),
//     entregador_id: Yup.string()
//       .required("Campo obrigatório"),
//     nome_atendente: Yup.string()
//       .required("Campo obrigatório")
//       .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Apenas texto é permitido"),
//   });

//   return (
//     <Formik
//       initialValues={{
//         data_entrega: "",
//         tipo_entrega: "",
//         numero_pedido: "",
//         entregador_id: "",
//         nome_atendente: "",
//       }}
//       onSubmit={handleSubmit}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         <div className="mb-4">
//           <h2 className="font-bold text-center mb-4 dark:text-gray-200">
//             Registro de Entregas
//           </h2>

//           <div className="mb-4">
//           <label
//             htmlFor="data_entrega"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//           >
//             Data da entrega:
//           </label>
//           <Field
//             type="date"
//             id="data_entrega"
//             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
//             name="data_entrega"
//           />
//           <ErrorMessage
//             name="data_entrega"
//             component="div"
//             className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="tipo_entrega"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//           >
//             Tipo de entrega:
//           </label>
//           <Field
//             type="text"
//             id="tipo_entrega"
//             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
//             name="tipo_entrega"
//           >
//           </Field>
//           <ErrorMessage
//             name="tipo_entrega"
//             component="div"
//             className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
//           />
//         </div>

//           <label
//             htmlFor="numero_pedido"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//           >
//             Número do Pedido:
//           </label>
//           <Field
//             type="text"
//             id="numero_pedido"
//             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
//             name="numero_pedido"
//           />
//           <ErrorMessage
//             name="numero_pedido"
//             component="div"
//             className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="entregador_id"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//           >
//             Entregador:
//           </label>
//           <Field
//             type="number"
//             id="entregador_id"
//             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
//             name="entregador_id"
//           />
//           <ErrorMessage
//             name="entregador_id"
//             component="div"
//             className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="nome_atendente"
//             className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//           >
//             Nome do Atendente:
//           </label>
//           <Field
//             type="text"
//             id="nome_atendente"
//             className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
//             name="nome_atendente"
//           />
//           <ErrorMessage
//             name="nome_atendente"
//             component="div"
//             className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-greenBtn hover:bg-greenBtn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenOak transform transition-transform hover:scale-105"
//         >
//           Enviar
//         </button>
//       </Form>
//     </Formik>
//   );
// }

// export default DeliveryForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function DeliveryForm() {
  const handleSubmit = async (values, {resetForm}) => {
    try {
    const payload = { ...values };
    if (!payload.numero_pedido) {
      delete payload.numero_pedido;
    }

    await axios.post("http://localhost:3000/deliveries", payload);
    console.log("Entrega registrada com sucesso!");
    resetForm(); // Limpa o formulário após a submissão
  } catch (error) {
    console.error("Erro ao registrar a entrega:", error);
  }
  };

  const validationSchema = Yup.object().shape({
    data_entrega: Yup.date().required("Campo obrigatório"),
    tipo_entrega: Yup.string().required("Campo obrigatório"),
    numero_pedido: Yup.string(),
    entregador_id: Yup.string()
      .required("Campo obrigatório"),
    nome_atendente: Yup.string()
      .required("Campo obrigatório")
      .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "Apenas texto é permitido"),
  });

  return (
    <Formik
      initialValues={{
        data_entrega: "",
        tipo_entrega: "",
        numero_pedido: "",
        entregador_id: "",
        nome_atendente: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="mb-4">
          <h2 className="font-bold text-center mb-4 dark:text-gray-200">
            Registro de Entregas
          </h2>

          <div className="mb-4">
          <label
            htmlFor="data_entrega"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Data da entrega:
          </label>
          <Field
            type="date"
            id="data_entrega"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="data_entrega"
          />
          <ErrorMessage
            name="data_entrega"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="tipo_entrega"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Tipo de entrega:
          </label>
          <Field
            as="select"
            id="tipo_entrega"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="tipo_entrega"
          >
            <option value="">Selecione o tipo de entrega</option>
            <option value="rápida">Rápida</option>
            <option value="programada">Programada</option>
            <option value="manual">Manual</option>
            <option value="transferencia">Transferência</option>
          </Field>
          <ErrorMessage
            name="tipo_entrega"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

          <label
            htmlFor="numero_pedido"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Número do Pedido:
          </label>
          <Field
            type="text"
            id="numero_pedido"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="numero_pedido"
          />
          <ErrorMessage
            name="numero_pedido"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="entregador_id"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Entregador:
          </label>
          <Field
            type="number"
            id="entregador_id"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="entregador_id"
          />
          <ErrorMessage
            name="entregador_id"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nome_atendente"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Nome do Atendente:
          </label>
          <Field
            type="text"
            id="nome_atendente"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            name="nome_atendente"
          />
          <ErrorMessage
            name="nome_atendente"
            component="div"
            className="text-sm font-medium text-red-600 dark:text-red-600 mb-2"
          />
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

export default DeliveryForm;
