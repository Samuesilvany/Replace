import React, { useState } from "react";

export default function Cadastro({ setTelaAtiva, abrirComoLogin, setAbrirComoLogin }) {
  const [tipoConta, setTipoConta] = useState("consumidor");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    setTelaAtiva("produtos");
  };

  const estiloInput = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box",
    marginTop: "6px"
  };

  const estiloLabel = {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#334155"
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ 
        background: "#ffffff", 
        border: "1px solid #e2e8f0", 
        padding: "40px", 
        borderRadius: "20px", 
        maxWidth: "500px", 
        width: "100%",
        boxShadow: "0 10px 25px rgba(0,0,0,0.02)"
      }}>
        
        <h2 style={{ textAlign: "center", color: "#0f172a", fontSize: "1.75rem", fontWeight: "700", margin: "0 0 6px 0" }}>
          {abrirComoLogin ? "Entrar no Replace" : "Crie sua conta no Replace"}
        </h2>
        <p style={{ textAlign: "center", color: "#64748b", margin: "0 0 28px 0", fontSize: "0.95rem" }}>
          Simplificando o acesso a alimentos e combatendo o desperdício.
        </p>

        {/* SELETOR EXCLUSIVO DE PERFIL (SÓ APARECE NO CADASTRO) */}
        {!abrirComoLogin && (
          <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
            <button 
              type="button"
              onClick={() => setTipoConta("consumidor")}
              style={{
                flex: 1, padding: "12px", borderRadius: "10px", fontWeight: "600", fontSize: "0.95rem", cursor: "pointer",
                border: tipoConta === "consumidor" ? "2px solid #22c55e" : "1px solid #cbd5e1",
                backgroundColor: tipoConta === "consumidor" ? "#f0fdf4" : "#ffffff",
                color: tipoConta === "consumidor" ? "#16a34a" : "#475569",
                transition: "all 0.2s"
              }}
            >
              👤 Consumidor
            </button>
            <button 
              type="button"
              onClick={() => setTipoConta("mercado")}
              style={{
                flex: 1, padding: "12px", borderRadius: "10px", fontWeight: "600", fontSize: "0.95rem", cursor: "pointer",
                border: tipoConta === "mercado" ? "2px solid #22c55e" : "1px solid #cbd5e1",
                backgroundColor: tipoConta === "mercado" ? "#f0fdf4" : "#ffffff",
                color: tipoConta === "mercado" ? "#16a34a" : "#475569",
                transition: "all 0.2s"
              }}
            >
              🏪 Mercado
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          
          {/* ================= TELA ALTERNADA: MODO CONSUMIDOR ================= */}
          {(!abrirComoLogin && tipoConta === "consumidor") && (
            <>
              <div style={{ fontSize: "0.85rem", color: "#22c55e", fontWeight: "700", marginBottom: "4px" }}>DADOS DO CLIENTE</div>
              <div>
                <label style={estiloLabel}>Nome Completo</label>
                <input type="text" placeholder="Seu nome completo" required style={estiloInput} />
              </div>
              <div>
                <label style={estiloLabel}>Telefone Celular</label>
                <input type="tel" placeholder="(11) 99999-9999" required style={estiloInput} />
              </div>
            </>
          )}

          {/* ================= TELA ALTERNADA: MODO MERCADO (MUDANÇA TOTAL) ================= */}
          {(!abrirComoLogin && tipoConta === "mercado") && (
            <>
              <div style={{ fontSize: "0.85rem", color: "#16a34a", fontWeight: "700", marginBottom: "4px" }}>DADOS DO ESTABELECIMENTO</div>
              <div>
                <label style={estiloLabel}>Nome Fantasia da Loja</label>
                <input type="text" placeholder="Ex: Supermercado do Bairro" required style={estiloInput} />
              </div>
              <div>
                <label style={estiloLabel}>Razão Social</label>
                <input type="text" placeholder="Ex: Alimentos LTDA" required style={estiloInput} />
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <div style={{ flex: 1 }}>
                  <label style={estiloLabel}>CNPJ</label>
                  <input type="text" placeholder="00.000.000/0001-00" required style={estiloInput} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={estiloLabel}>Inscrição Estadual</label>
                  <input type="text" placeholder="Número ou Isento" required style={estiloInput} />
                </div>
              </div>
              <div>
                <label style={estiloLabel}>Endereço Comercial</label>
                <input type="text" placeholder="Rua, Número, Bairro, Cidade - UF" required style={estiloInput} />
              </div>
              <div>
                <label style={estiloLabel}>Telefone Fixo da Loja</label>
                <input type="tel" placeholder="(11) 4004-0000" style={estiloInput} />
              </div>
            </>
          )}

          {/* CAMPOS COMUNS (LOGIN E CADASTRO) */}
          <div style={{ borderTop: !abrirComoLogin ? "1px solid #f1f5f9" : "none", paddingTop: !abrirComoLogin ? "12px" : "0" }}>
            <label style={estiloLabel}>E-mail de acesso</label>
            <input type="email" placeholder="seu@email.com" required style={estiloInput} />
          </div>

          <div>
            <label style={estiloLabel}>Senha</label>
            <input type="password" placeholder="••••••••" required style={estiloInput} />
          </div>

          <button type="submit" style={{ backgroundColor: "#22c55e", color: "white", padding: "14px", border: "none", borderRadius: "10px", fontWeight: "600", fontSize: "1rem", cursor: "pointer", marginTop: "10px" }}>
            {abrirComoLogin ? "Entrar" : "Criar minha conta"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "24px", fontSize: "0.95rem", color: "#64748b" }}>
          {abrirComoLogin ? "Novo por aqui? " : "Já tem uma conta? "}
          <span style={{ color: "#22c55e", fontWeight: "600", cursor: "pointer" }} onClick={() => setAbrirComoLogin(!abrirComoLogin)}>
            {abrirComoLogin ? "Cadastre-se" : "Faça login"}
          </span>
        </p>
      </div>
    </div>
  );
}