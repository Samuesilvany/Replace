import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo-replace.jpg";
import "./Cadastro.css";
import { AuthContext } from "../auth/AuthContext";

export default function Cadastro() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [tipoConta, setTipoConta] = useState("consumidor");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const nome = form.nome?.value;
    const email = form.email?.value;
    const confirmarEmail = form.confirmEmail?.value;
    const senha = form.password?.value;
    const confirmarSenha = form.confirmPassword?.value;

    if ((email || "") !== (confirmarEmail || "")) {
      alert("Os e-mails não coincidem");
      return;
    }

    if ((senha || "") !== (confirmarSenha || "")) {
      alert("As senhas não coincidem");
      return;
    }

    const usuario = {
      nome: nome || "",
      email: email || "",
      senha: senha || "",
      tipoConta,
    };

    // Não loga o usuário automaticamente; apenas redireciona para a tela de login
    navigate("/login");
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
    marginTop: "6px",
  };

  const estiloLabel = {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#334155",
  };

  const usuarioLogado = auth?.usuario;

  return (
    <div className="cadastro-page">
      <header className="cadastro-navbar">
        <div className="cadastro-brand">
          <div className="logo-box">
            <img className="cadastro-logo-img" src={logo} alt="Replace" />
          </div>
          <span>Replace</span>
        </div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/reservas">Reservas</Link>
          <Link to="/about">Sobre</Link>
        </nav>

        <div className="cadastro-actions">
          {usuarioLogado ? (
            <button
              type="button"
              onClick={() => {
                auth.logout();
                navigate("/");
              }}
              className="cadastro-btn-login"
            >
              Sair
            </button>
          ) : (
            <>
              <Link to="/login" className="cadastro-btn-login">
                Entrar
              </Link>
              <Link to="/cadastro" className="cadastro-btn-register">
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </header>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "500px",
            width: "100%",
            boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#0f172a",
              fontSize: "1.75rem",
              fontWeight: "700",
              margin: "0 0 6px 0",
            }}
          >
            Crie sua conta no Replace
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              margin: "0 0 28px 0",
              fontSize: "0.95rem",
            }}
          >
            Simplificando o acesso a alimentos e combatendo o desperdício.
          </p>

          <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
            <button
              type="button"
              onClick={() => setTipoConta("consumidor")}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "0.95rem",
                cursor: "pointer",
                border:
                  tipoConta === "consumidor"
                    ? "2px solid #22c55e"
                    : "1px solid #cbd5e1",
                backgroundColor:
                  tipoConta === "consumidor" ? "#f0fdf4" : "#ffffff",
                color: tipoConta === "consumidor" ? "#16a34a" : "#475569",
                transition: "all 0.2s",
              }}
            >
              👤 Consumidor
            </button>

            <button
              type="button"
              onClick={() => setTipoConta("mercado")}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "0.95rem",
                cursor: "pointer",
                border:
                  tipoConta === "mercado"
                    ? "2px solid #22c55e"
                    : "1px solid #cbd5e1",
                backgroundColor:
                  tipoConta === "mercado" ? "#f0fdf4" : "#ffffff",
                color: tipoConta === "mercado" ? "#16a34a" : "#475569",
                transition: "all 0.2s",
              }}
            >
              🏪 Mercado
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {tipoConta === "consumidor" && (
              <>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#22c55e",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  DADOS DO CLIENTE
                </div>
                <div>
                  <label style={estiloLabel}>Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    style={estiloInput}
                  />
                </div>
                <div>
                  <label style={estiloLabel}>Telefone Celular</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    style={estiloInput}
                  />
                </div>
              </>
            )}

            {tipoConta === "mercado" && (
              <>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#16a34a",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  DADOS DO ESTABELECIMENTO
                </div>
                <div>
                  <label style={estiloLabel}>Nome Fantasia da Loja</label>
                  <input
                    type="text"
                    placeholder="Ex: Supermercado do Bairro"
                    required
                    style={estiloInput}
                  />
                </div>
                <div>
                  <label style={estiloLabel}>Razão Social</label>
                  <input
                    type="text"
                    placeholder="Ex: Alimentos LTDA"
                    required
                    style={estiloInput}
                  />
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <div style={{ flex: 1 }}>
                    <label style={estiloLabel}>CNPJ</label>
                    <input
                      type="text"
                      placeholder="00.000.000/0001-00"
                      required
                      style={estiloInput}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={estiloLabel}>Inscrição Estadual</label>
                    <input
                      type="text"
                      placeholder="Número ou Isento"
                      required
                      style={estiloInput}
                    />
                  </div>
                </div>

                <div>
                  <label style={estiloLabel}>Endereço Comercial</label>
                  <input
                    type="text"
                    placeholder="Rua, Número, Bairro, Cidade - UF"
                    required
                    style={estiloInput}
                  />
                </div>

                <div>
                  <label style={estiloLabel}>Telefone Fixo da Loja</label>
                  <input
                    type="tel"
                    placeholder="(11) 4004-0000"
                    style={estiloInput}
                  />
                </div>
              </>
            )}

            <div
              style={{
                borderTop: "1px solid #f1f5f9",
                paddingTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div>
                <label style={estiloLabel}>E-mail de acesso</label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                  style={estiloInput}
                />
              </div>

              <div>
                <label style={estiloLabel}>Confirmar e-mail</label>
                <input
                  type="email"
                  name="confirmEmail"
                  placeholder="confirme seu@email.com"
                  required
                  style={estiloInput}
                />
              </div>
            </div>

            <div>
              <label style={estiloLabel}>Senha</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                style={estiloInput}
              />
            </div>

            <div>
              <label style={{ ...estiloLabel, marginTop: "12px" }}>
                Confirmar senha
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                required
                style={estiloInput}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#22c55e",
                color: "white",
                padding: "14px",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Cadastrar
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "24px",
              fontSize: "0.95rem",
              color: "#64748b",
            }}
          >
            Já tem uma conta?{" "}
            <Link to="/login" style={{ color: "#22c55e", fontWeight: 600 }}>
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
