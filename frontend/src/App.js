import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Proyecto</h1>
      <div>
        <input type="search" />
        <button>buscar</button>
      </div>
      <br />
      <select name="sort" id="sort">
        <option value="progressoDecrescente">Mais próximo de finalizar</option>
        <option value="progressoCrescente">Mais longe de finalizar</option>
        <option value="maiselementos">Com mais elementos</option>
        <option value="avaliacao">Melhor avaliado</option>
      </select>
      <table>
        <tr>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 1</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>50%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 2</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>75%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 3</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>0%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 4</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>0%</p>
          </td>
        </tr>
        <tr>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 1</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>50%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 2</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>75%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 3</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>0%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 4</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>0%</p>
          </td>
        </tr>
        <tr>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 1</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>50%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 2</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>75%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 3</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>0%</p>
          </td>
          <td >
            <img src="https://st.depositphotos.com/1252248/1783/i/450/depositphotos_17830541-stock-photo-open-book-with-colorful-pages.jpg"
              alt="" />
            <p><b>Projeto 4</b></p>
            <p>Descrição...</p>
            <p>Categoria</p>
            <p>0%</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
