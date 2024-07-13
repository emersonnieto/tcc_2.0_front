import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TransactionSummary {
  totalIncome: string; // Alterado para string para lidar com números que chegam como strings
  totalExpense: string; // Alterado para string para lidar com números que chegam como strings
  currentBalance: string; // Alterado para string para lidar com números que chegam como strings
}

const BalanceCard: React.FC = () => {
  const [summary, setSummary] = useState<TransactionSummary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token JWT não encontrado');
      }

      const response = await axios.get<TransactionSummary>('http://localhost:3000/api/transactions/summary', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response);

      setSummary(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setError('Não autorizado. Faça login novamente.');
        } else {
          setError('Erro ao buscar dados das transações');
        }
      } else {
        setError('Erro ao buscar dados das transações');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="transaction-summary-card">Carregando...</div>;
  }

  if (error) {
    return <div className="transaction-summary-card">{error}</div>;
  }

  if (!summary || !isValidNumber(summary.totalIncome) || !isValidNumber(summary.totalExpense) || !isValidNumber(summary.currentBalance)) {
    return <div className="transaction-summary-card">Dados de resumo inválidos.</div>;
  }

  return (
    <div className="transaction-summary-card">
      <h3>Resumo de Transações</h3>
      <div>
        <p>Total de Entrada: R$ {parseFloat(summary.totalIncome).toFixed(2)}</p>
        <p>Total de Saída: R$ {parseFloat(summary.totalExpense).toFixed(2)}</p>
        <p>Saldo Atual: R$ {parseFloat(summary.currentBalance).toFixed(2)}</p>
      </div>
    </div>
  );
};

const isValidNumber = (value: string): boolean => {
  const parsed = parseFloat(value);
  return !isNaN(parsed) && isFinite(parsed);
};

export default BalanceCard;
