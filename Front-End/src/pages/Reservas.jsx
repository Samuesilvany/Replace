import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo-replace.jpg";
import "./Reservas.css";
import { AuthContext } from "../auth/AuthContext";

const STORAGE_KEY = "reservas";

function lerReservas() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function removerReservaPorId(id) {
  const atuais = lerReservas();
  const prox = atuais.filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prox));
  return prox;
}

export default function Reservas() {
  const auth = useContext(AuthContext);
  const usuarioLogado = auth?.usuario;

  const [reservas, setReservas] = useState([]);
  const [toast, setToast] = useState({ show: false, message: "" });

  useEffect(() => {
    setReservas(lerReservas());
  }, []);

  const hasReservas = useMemo(() => reservas.length > 0, [reservas]);

  const cancelarReserva = (id) => {
    const item = reservas.find((r) => r.id === id);
    const nomeItem = item ? item.nome : "Produto";
    const prox = removerReservaPorId(id);
    setReservas(prox);
    setToast({ show: true, message: `Reserva de "${nomeItem}" cancelada.` });

    window.clearTimeout(window.__replaceToastTimeout);
    window.__replaceToastTimeout = window.setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  return (
    <div className="reservas-page">
      <header className="navbar reservas-navbar">
        <Link to="/" className="brand" style={{ textDecoration: "none" }}>
          <div className="logo-box">
            <img
              src={logo}
              alt="Replace"
              className="logo-img"
              style={{ width: "56px", height: "56px" }}
            />
          </div>
          <span>Replace</span>
        </Link>

        <nav>
          <Link to="/" className="nav-link">
            Início
          </Link>
          <Link to="/produtos" className="nav-link">
            Produtos
          </Link>
          <Link to="/reservas" className="nav-link nav-link-active">
            Reservas
          </Link>
          <Link to="/about" className="nav-link">
            Sobre
          </Link>
        </nav>

        <div className="nav-actions">
          {usuarioLogado ? (
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                auth.logout();
              }}
            >
              Sair
            </button>
          ) : (
            <>
              <Link to="/login" className="btn-outline">
                Entrar
              </Link>
              <Link to="/cadastro" className="btn-primary">
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </header>

      <main className="reservas-main">
        <h2 className="reservas-title">Suas Reservas</h2>

        {!hasReservas ? (
          <div className="reservas-empty">
            <p>
              Você ainda não reservou nenhum produto. Volte para a tela de
              Produtos.
            </p>
            <Link to="/produtos" className="btn-primary">
              Ver produtos
            </Link>
          </div>
        ) : (
          <div className="reservas-grid">
            {reservas.map((r) => {
              const pct =
                r.porcentagemDesconto ??
                (r.precoOriginal && r.precoComDesconto
                  ? Math.round(
                      ((r.precoOriginal - r.precoComDesconto) /
                        r.precoOriginal) *
                        100,
                    )
                  : 0);

              return (
                <div className="reserva-card" key={r.id}>
                  <div className="reserva-img-wrap">
                    <img src={r.imagem} alt={r.nome} className="reserva-img" />
                    <span className="reserva-discount">-{pct}%</span>
                  </div>

                  <div className="reserva-body">
                    <div className="reserva-cat">{r.categoria}</div>
                    <h3 className="reserva-nome">{r.nome}</h3>

                    <div className="reserva-prices">
                      <span className="preco-antigo">
                        R$ {Number(r.precoOriginal).toFixed(2)}
                      </span>
                      <span className="preco-novo">
                        R$ {Number(r.precoComDesconto).toFixed(2)}
                      </span>
                    </div>

                    <div className="reserva-validade">
                      <strong>Vence em:</strong> {r.dataDeVencimento}
                    </div>

                    <div className="reserva-status">Status: Reservado</div>

                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={() => cancelarReserva(r.id)}
                    >
                      Cancelar Reserva
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {toast.show && (
        <div className="toast-container-cancel">
          <span className="toast-icon">⚠️</span>
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}
