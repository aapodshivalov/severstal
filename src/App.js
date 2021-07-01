import React from 'react';
import './App.css';
import { data } from './data';

function App() {
  const getTable = (data) => {
    data.filter(el => el.isActive); // фильтруем , берем активные строки
    if (!data || data.length === 0) {
      return <p>Нет данных</p>
    }
    return <table className="table">
      <caption>Таблица</caption>
      <tbody>
        <tr>
          <th>Баланс</th>
          <th>Имя</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.balance}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  }

  const table = getTable(data);

  return (
    <div className="App">
      <div>{table}</div>
    </div>
  );
}

export default App;
