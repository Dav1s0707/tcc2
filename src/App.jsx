import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/usuario" element={<Usuario />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

