import React, { useState, useEffect } from 'react';
import './MonthYearPicker.css';

const MonthYearPicker: React.FC = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Os meses começam em 0
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth.toString());
  const [selectedYear, setSelectedYear] = useState<string>(currentYear.toString());

  const months = [
    { label: 'Janeiro', value: '1' },
    { label: 'Fevereiro', value: '2' },
    { label: 'Março', value: '3' },
    { label: 'Abril', value: '4' },
    { label: 'Maio', value: '5' },
    { label: 'Junho', value: '6' },
    { label: 'Julho', value: '7' },
    { label: 'Agosto', value: '8' },
    { label: 'Setembro', value: '9' },
    { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' },
    { label: 'Dezembro', value: '12' }
  ];

  const years = [];
  const startYear = currentYear - 50;
  const endYear = currentYear + 50;

  for (let year = startYear; year <= endYear; year++) {
    years.push({ label: year.toString(), value: year.toString() });
  }

  useEffect(() => {
    setSelectedMonth(currentMonth.toString());
    setSelectedYear(currentYear.toString());
  }, [currentMonth, currentYear]);

  return (
    <div className="container">
      <label className="label" htmlFor="month"></label>
      <select
        id="month"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="select"
      >
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      <label className="label" htmlFor="year"></label>
      <select
        id="year"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="select"
      >
        {years.map((year) => (
          <option key={year.value} value={year.value}>
            {year.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthYearPicker;
