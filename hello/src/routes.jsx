import React from "react";

// import dos componentes de rota
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import das páginas (componentes)
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutosPage from "./pages/ProdutosPage/ProdutosPage";

// inicia-se a lógica
const Rotas = () => {
  return (
    // criar a estrutura de rotas
    <BrowserRouter>
    <Routes>
        <Route element= {<HomePage/>} path= {"/"} exact/>
        <Route element= {<LoginPage/>} path= {"/login"}/>
        <Route element= {<ProdutosPage/>} path= {"/produtos"}/>
    </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
