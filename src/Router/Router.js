import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import frutaria from "../frutaria.json"
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";


export default function Router() {
  const [carrinho, setCarrinho] = useState([]);
  const [frutas, setFrutas] = useState(frutaria.frutaria);
  const adicionaNoCarrinho = () => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Mercadinho carrinho={carrinho} setCarrinho={setCarrinho} frutas={frutas} />}
        />
        <Route
          path="/cart"
          element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />}
        />
        <Route
          path="/create"
          element={<Cadastro frutas={frutas} setFrutas={setFrutas} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
