import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const FilterResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const year = queryParams.get('year');
  const month = queryParams.get('month');
  const view = queryParams.get('view') || 'detailed';

  const [deliveries, setDeliveries] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deliverersMap = {
    1: 'Gean',
    2: 'Lucas',
    3: 'Nathanael',
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (view === 'detailed') {
          const response = await axios.get('http://localhost:3000/deliveries/monthly', {
            params: { year, month },
          });
          const deliveriesWithNames = response.data.map(delivery => ({
            ...delivery,
            entregador_nome: deliverersMap[delivery.entregador_id] || 'Desconhecido',
          }));
          setDeliveries(deliveriesWithNames);
        } else if (view === 'summary') {
          const response = await axios.get('http://localhost:3000/stats', {
            params: { year, month },
          });
          setStats(response.data);
        }
      } catch (err) {
        setError('Erro ao buscar dados.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [year, month, view]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="min-h-screen flex items-center justify-center w-full bg-greenOak dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Resultados do Filtro
        </h1>
        {view === 'detailed' ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Detalhes das Entregas</h2>
            <ul>
              {deliveries.length > 0 ? (
                deliveries.map((delivery, index) => (
                  <li key={index} className="mb-2">
                    <p><strong>Data:</strong> {new Date(delivery.data_entrega).toLocaleDateString('pt-BR')}</p>
                    <p><strong>Tipo de Entrega:</strong> {delivery.tipo_entrega}</p>
                    <p><strong>Número do Pedido:</strong> {delivery.numero_pedido || 'N/A'}</p>
                    <p><strong>Entregador:</strong> {delivery.entregador_nome}</p>
                    <p><strong>Nome do Atendente:</strong> {delivery.nome_atendente}</p>
                  </li>
                ))
              ) : (
                <p>Nenhuma entrega encontrada.</p>
              )}
            </ul>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Resumo das Entregas</h2>
            <ul>
              {stats.length > 0 ? (
                stats.map((stat, index) => (
                  <li key={index} className="mb-2">
                    <p><strong>Tipo de Entrega:</strong> {stat.tipo_entrega}</p>
                    <p><strong>Total:</strong> {stat.total}</p>
                  </li>
                ))
              ) : (
                <p>Nenhum dado encontrado.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterResultsPage;
