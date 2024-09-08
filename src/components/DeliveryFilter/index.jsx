import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeliveryFilter = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [view, setView] = useState('detailed');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleYearChange = (e) => setYear(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleViewChange = (e) => setView(e.target.value);

  const fetchDeliveries = async () => {
    setLoading(true);
    setError(null);
    try {
      if (year && month) {
        navigate(`/filter-results?year=${year}&month=${month}&view=${view}`);
      } else {
        setError('Ano e mês são obrigatórios.');
      }
    } catch (err) {
      setError('Erro ao buscar entregas.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDeliveries();
  };

  return (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Ano:
            </label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={handleYearChange}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="month"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Mês:
            </label>
            <input
              type="number"
              id="month"
              value={month}
              onChange={handleMonthChange}
              min="1"
              max="12"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="view"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Visualização:
            </label>
            <select
              id="view"
              value={view}
              onChange={handleViewChange}
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-greenOak focus:border-greenOak"
            >
              <option value="detailed">Detalhada</option>
              <option value="summary">Resumo</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-greenBtn hover:bg-greenBtn-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greenOak transform transition-transform hover:scale-105"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Buscar Entregas'}
          </button>
        </form>
  );
};

export default DeliveryFilter;
