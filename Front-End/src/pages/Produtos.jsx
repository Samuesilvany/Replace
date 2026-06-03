import React, { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo-replace.jpg";
import { AuthContext } from "../auth/AuthContext";

const STORAGE_KEY = "reservas";

const dbProdutos = [
  {
    id: 1,
    nome: "Filé de Frango",
    desc: "Resfriado e em embalagem higienizada",
    precoAntigo: 25.0,
    precoNovo: 16.25,
    validade: "03/06/2026",
    cat: "Carnes",
    img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    nome: "Cenoura",
    desc: "Perfeita para saladas e sucos saudáveis",
    precoAntigo: 7.0,
    precoNovo: 4.9,
    validade: "04/06/2026",
    cat: "Hortifrúti",
    img: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    nome: "Batata Inglesa",
    desc: "Selecionada e limpa para consumo imediato",
    precoAntigo: 9.0,
    precoNovo: 6.75,
    validade: "05/06/2026",
    cat: "Hortifrúti",
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    nome: "Maçã Gala",
    desc: "Doce, crocante e rica em vitaminas",
    precoAntigo: 12.0,
    precoNovo: 8.4,
    validade: "04/06/2026",
    cat: "Hortifrúti",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    nome: "Iogurte Natural",
    desc: "Laticínio cremoso ideal para misturas",
    precoAntigo: 10.0,
    precoNovo: 5.0,
    validade: "05/06/2026",
    cat: "Laticínios",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Produtos() {
  const [focoId, setFocoId] = useState(null);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const usuarioLogado = auth?.usuario;

  const reservasAtuais = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }, []);

  return (
    <div>
      <header
        className="navbar"
        style={{
          height: "110px",
          padding: "0 8%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="brand"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <div className="logo-box">
            <img
              src={logo}
              alt="Replace"
              style={{ width: "56px", height: "56px", objectFit: "contain" }}
            />
          </div>
          <span style={{ fontSize: "30px", fontWeight: 800, color: "#0f172a" }}>
            Replace
          </span>
        </div>

        <nav style={{ display: "flex", gap: "32px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              fontSize: "19px",
              fontWeight: 500,
            }}
          >
            Início
          </Link>
          <Link
            to="/produtos"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              fontSize: "19px",
              fontWeight: 500,
            }}
          >
            Produtos
          </Link>
          <Link
            to="/reservas"
            style={{
              textDecoration: "none",
              color: "#16a34a",
              fontSize: "19px",
              fontWeight: 700,
            }}
          >
            Reservas
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#0f172a",
              fontSize: "19px",
              fontWeight: 500,
            }}
          >
            Sobre
          </Link>
        </nav>

        <div className="nav-actions" style={{ display: "flex", gap: "14px" }}>
          {usuarioLogado ? (
            <button
              type="button"
              onClick={() => {
                auth.logout();
                navigate("/");
              }}
              style={{
                padding: "13px 28px",
                borderRadius: "999px",
                fontWeight: 600,
                color: "#16a34a",
                border: "1px solid #16a34a",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Sair
            </button>
          ) : (
            <>
              <Link
                to="/login"
                style={{
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  color: "#16a34a",
                  border: "1px solid #16a34a",
                }}
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                style={{
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  color: "#fff",
                  background: "#22c55e",
                }}
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Conteúdo abaixo da navbar */}
      <div style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            color: "#0f172a",
            marginBottom: "8px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Ofertas Disponíveis
        </h2>
        <p
          style={{
            color: "#64748b",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Passe o mouse por cima para ver a aproximação e detalhes do alimento.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {dbProdutos.map((p) => {
            const ativo = focoId === p.id;
            const pct = Math.round(
              ((p.precoAntigo - p.precoNovo) / p.precoAntigo) * 100,
            );

            return (
              <div
                key={p.id}
                onMouseEnter={() => setFocoId(p.id)}
                onMouseLeave={() => setFocoId(null)}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: ativo
                    ? "scale(1.03) translateY(-4px)"
                    : "scale(1) translateY(0)",
                  boxShadow: ativo
                    ? "0 12px 20px rgba(0,0,0,0.06)"
                    : "0 2px 4px rgba(0,0,0,0.01)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "145px",
                    overflow: "hidden",
                    position: "relative",
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "#ef4444",
                      color: "white",
                      padding: "3px 8px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      zIndex: 2,
                    }}
                  >
                    -{pct}%
                  </span>
                  <img
                    src={p.img}
                    alt={p.nome}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      transform: ativo ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </div>

                <div style={{ padding: "16px", textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#22c55e",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {p.cat}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      margin: "4px 0 8px 0",
                      color: "#1e293b",
                      fontWeight: "700",
                    }}
                  >
                    {p.nome}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#64748b",
                      margin: "0 0 14px 0",
                      minHeight: "34px",
                      lineHeight: "1.4",
                    }}
                  >
                    {p.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "center",
                      gap: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.85rem",
                        textDecoration: "line-through",
                        color: "#94a3b8",
                      }}
                    >
                      R$ {p.precoAntigo.toFixed(2)}
                    </span>
                    <span
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#16a34a",
                      }}
                    >
                      R$ {p.precoNovo.toFixed(2)}
                    </span>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid #f1f5f9",
                      paddingTop: "10px",
                      fontSize: "0.8rem",
                      color: "#64748b",
                    }}
                  >
                    <strong>Vence em:</strong> {p.validade}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!usuarioLogado) {
                        navigate("/login");
                        return;
                      }

                      const atuais = (() => {
                        try {
                          return (
                            JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
                          );
                        } catch {
                          return [];
                        }
                      })();

                      const jaReservado = atuais.some((x) => x.id === p.id);
                      if (jaReservado) return;

                      const precoComDesconto = p.precoNovo;
                      const precoOriginal = p.precoAntigo;
                      const porcentagemDesconto = Math.round(
                        ((precoOriginal - precoComDesconto) / precoOriginal) *
                          100,
                      );

                      const item = {
                        id: p.id,
                        nome: p.nome,
                        categoria: p.cat,
                        imagem: p.img,
                        precoOriginal,
                        precoComDesconto,
                        porcentagemDesconto,
                        dataDeVencimento: p.validade,
                      };

                      const prox = [...atuais, item];
                      localStorage.setItem(STORAGE_KEY, JSON.stringify(prox));
                    }}
                    style={{
                      marginTop: "14px",
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      border: "1px solid #16a34a",
                      background: "#16a34a",
                      color: "white",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
