import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import logo from "../assets/Logo-replace.jpg";
import "./about.css";
import { AuthContext } from "../auth/AuthContext";
function About() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const usuarioLogado = auth?.usuario;

  return (
    <div className="sobre-page">
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Replace" className="logo-img" />
          <span>Replace</span>
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/about">Sobre</Link>
        </nav>

        <div className="actions">
          {usuarioLogado ? (
            <button
              type="button"
              className="btn-login"
              onClick={() => {
                auth.logout();
                navigate("/");
              }}
            >
              Sair
            </button>
          ) : (
            <>
              <Link to="/login" className="btn-login">
                Entrar
              </Link>
              <Link to="/cadastro" className="btn-register">
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </header>

      <main>
        <section className="about-hero">
          <div className="hero-text">
            <span className="tag">🌱 Sustentabilidade e economia</span>
            <h1>Sobre a Replace</h1>
            <p>
              Transformando a forma como consumimos, reduzindo desperdícios e
              construindo um futuro mais sustentável.
            </p>
          </div>

          <div className="logo">
            <img src={logo} alt="Replace" className="logo-img" />
            <span>Replace</span>
          </div>
        </section>

        <section className="history">
          <h2>Nossa história</h2>
          <p>
            A Replace nasceu de uma constatação alarmante: milhões de toneladas
            de alimentos são desperdiçadas todos os anos, enquanto muitas
            pessoas buscam economia e produtos de qualidade com preços
            acessíveis.
          </p>
        </section>

        <section className="info-grid">
          <div className="info-card">
            <div className="card-icon">🎯</div>
            <h3>Nossa Missão</h3>
            <p>
              Reduzir o desperdício de alimentos conectando consumidores
              conscientes a produtos de qualidade com preços acessíveis.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">🚀</div>
            <h3>Nossa Visão</h3>
            <p>
              Ser a maior plataforma de combate ao desperdício de alimentos do
              Brasil, promovendo sustentabilidade e economia.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">💚</div>
            <h3>Nossos Valores</h3>
            <ul>
              <li>Sustentabilidade em primeiro lugar</li>
              <li>Transparência e honestidade</li>
              <li>Compromisso com a qualidade</li>
              <li>Impacto social positivo</li>
            </ul>
          </div>
        </section>

        <section className="impact">
          <h2>Nosso impacto</h2>
          <p>Números que fazem a diferença</p>

          <div className="impact-grid">
            <div className="impact-card">
              <span>👥</span>
              <h3>50mil+</h3>
              <p>Usuários ativos</p>
            </div>

            <div className="impact-card">
              <span>🏪</span>
              <h3>200+</h3>
              <p>Mercados parceiros</p>
            </div>

            <div className="impact-card">
              <span>🍎</span>
              <h3>15 ton</h3>
              <p>Alimentos salvos</p>
            </div>

            <div className="impact-card">
              <span>💰</span>
              <h3>R$ 2M</h3>
              <p>Economizados</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
