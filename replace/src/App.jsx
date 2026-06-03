import { useState } from "react";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Cadastro from "./pages/Cadastro";

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState("home");
  const [abrirComoLogin, setAbrirComoLogin] = useState(false);

  const irParaCadastro = () => {
    setAbrirComoLogin(false);
    setTelaAtiva("cadastro");
  };

  const irParaLogin = () => {
    setAbrirComoLogin(true);
    setTelaAtiva("cadastro");
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#ffffff" }}>
      
      {/* CABEÇALHO DA COMPLETO IGUAL A FOTO DE REFERÊNCIA */}
      <header style={{ 
        width: "100%", 
        backgroundColor: "#ffffff", 
        borderBottom: "1px solid #eaeaea", 
        padding: "18px 40px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        boxSizing: "border-box"
      }}>
        
        {/* LOGO ESQUERDA */}
        <div onClick={() => setTelaAtiva("home")} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
          <div style={{ backgroundColor: "#22c55e", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "1.1rem", fontWeight: "bold" }}>🍃</span>
          </div>
          <span style={{ fontSize: "1.35rem", fontWeight: "700", color: "#1e293b" }}>Replace</span>
        </div>

        {/* LINKS CENTRAIS */}
        <nav style={{ display: "flex", gap: "35px", alignItems: "center" }}>
          <span onClick={() => setTelaAtiva("home")} style={{ cursor: "pointer", fontSize: "1rem", fontWeight: "500", color: telaAtiva === "home" ? "#22c55e" : "#475569" }}>Início</span>
          <span onClick={() => setTelaAtiva("produtos")} style={{ cursor: "pointer", fontSize: "1rem", fontWeight: "500", color: telaAtiva === "produtos" ? "#22c55e" : "#475569" }}>Produtos</span>
          <span style={{ cursor: "pointer", fontSize: "1rem", fontWeight: "500", color: "#475569" }}>Mercados</span>
          <span style={{ cursor: "pointer", fontSize: "1rem", fontWeight: "500", color: "#475569" }}>Como funciona</span>
          <span style={{ cursor: "pointer", fontSize: "1rem", fontWeight: "500", color: "#475569" }}>Sobre</span>
        </nav>

        {/* BOTÕES DIREITA */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <button onClick={irParaLogin} style={{ background: "none", border: "none", fontSize: "1rem", fontWeight: "600", color: "#475569", cursor: "pointer" }}>Entrar</button>
          <button onClick={irParaCadastro} style={{ backgroundColor: "#22c55e", color: "white", border: "none", padding: "12px 24px", borderRadius: "10px", fontSize: "1rem", fontWeight: "600", cursor: "pointer", transition: "0.2s" }}>Cadastrar</button>
        </div>
      </header>

      {/* CONTEÚDO DAS TELAS */}
      <main style={{ backgroundColor: "#ffffff" }}>
        {telaAtiva === "home" && <Home setTelaAtiva={setTelaAtiva} irParaCadastro={irParaCadastro} />}
        {telaAtiva === "produtos" && <Produtos />}
        {telaAtiva === "cadastro" && (
          <Cadastro 
            setTelaAtiva={setTelaAtiva} 
            abrirComoLogin={abrirComoLogin} 
            setAbrirComoLogin={setAbrirComoLogin} 
          />
        )}
      </main>
    </div>
  );
}