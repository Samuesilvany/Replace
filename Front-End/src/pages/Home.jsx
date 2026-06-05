import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import "./Home.css";
import logo from "../assets/Logo-replace.jpg";
import { AuthContext } from "../auth/AuthContext";

function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const usuarioLogado = auth?.usuario;

  return (
    <div className="home">
      <header className="navbar">
        <Link to="/" className="logo">
          <div className="logo-box">
            <img src={logo} alt="Replace" className="logo-img" />
          </div>
          <span>Replace</span>
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/reservas">Reservas</Link>
          <Link to="/about">Sobre</Link>
        </nav>

        <div className="nav-actions">
          {usuarioLogado ? (
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                auth.logout();
                navigate("/");
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

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1>Evite desperdícios. Economize todos os dias.</h1>

            <p>
              Produtos próximos da validade com grandes descontos. Bom para
              você, ótimo para o planeta.
            </p>

            <br />

            <br />

            <br />
            <div className="hero-buttons">
              <br />

              <Link to="/produtos" className="btn-primary">
                Ver ofertas
              </Link>

              {!usuarioLogado && (
                <Link to="/mercados" className="btn-outline">
                  Sou um mercado
                </Link>
              )}
            </div>
          </div>

          <div className="hero-image">
            <span className="discount"></span>
          </div>
        </section>

        <section className="benefits">
          <h2>Por que o Replace funciona</h2>

          <div className="cards">
            <div className="card">
              <div className="icon">💸</div>
              <h3>Economize mais</h3>
              <p>Ofertas com desconto direto no momento certo.</p>
            </div>

            <div className="card">
              <div className="icon">🌿</div>
              <h3>Reduza desperdícios</h3>
              <p>Menos descarte, mais consumo consciente.</p>
            </div>

            <div className="card">
              <div className="icon">🏪</div>
              <h3>Apoie mercados locais</h3>
              <p>Conecte seu bairro a produtos próximos da validade.</p>
            </div>
          </div>
        </section>

        <section className="steps" id="como-funciona">
          <h2>Como funciona</h2>

          <div className="cards">
            <div className="step-card">
              <span>1</span>
              <h3>Mercados cadastram produtos próximos da validade</h3>
              <p>Enviam itens com desconto para reduzir o descarte.</p>
            </div>

            <div className="step-card">
              <span>2</span>
              <h3>Consumidores encontram ofertas</h3>
              <p>Escolhem produtos e garantem preços especiais.</p>
            </div>

            <div className="step-card">
              <span>3</span>
              <h3>Produtos são aproveitados</h3>
              <p>O alimento chega a quem vai consumir.</p>
            </div>
          </div>
        </section>

        <section className="dashboard-advantages">
          <div className="advantages-container">
            <div className="advantages-text">
              <span className="tag-green">Dashboard Exclusivo</span>
              <h2>Gerencie seu mercado de forma inteligente</h2>
              <p>
                Com o painel do Replace, seu estabelecimento tem controle total sobre o estoque próximo do vencimento e o impacto gerado.
              </p>
              <ul className="advantages-list">
                <li>
                  <strong>Métricas em Tempo Real:</strong> Acompanhe a receita recuperada e o peso de alimentos salvos do descarte.
                </li>
                <li>
                  <strong>Cadastro Ultrarrápido:</strong> Adicione produtos e crie promoções automáticas em segundos.
                </li>
                <li>
                  <strong>Alertas de Criticidade:</strong> Receba avisos inteligentes sobre quais itens precisam de promoção urgente.
                </li>
                <li>
                  <strong>Controle de Reservas:</strong> Visualize quais produtos já foram reservados e aguardam retirada.
                </li>
              </ul>
            </div>
            <div className="advantages-preview">
              <div className="preview-card">
                <div className="preview-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="preview-title">replace-dashboard.png</span>
                </div>
                <div className="preview-body">
                  <div className="body-metric">
                    <span className="metric-label">Receita Recuperada</span>
                    <span className="metric-val">R$ 12.450</span>
                  </div>
                  <div className="body-alerts">
                    <div className="alert-item">
                      <span>Tomate (18 un)</span>
                      <span className="badge-red">Crítico</span>
                    </div>
                    <div className="alert-item">
                      <span>Filé de Frango (5 un)</span>
                      <span className="badge-green">Reservado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact">
          <h2>Gerando impacto positivo</h2>

          <div className="cards">
            <div className="impact-card">
              <h3>1.200kg</h3>
              <p>Alimentos reaproveitados</p>
            </div>

            <div className="impact-card">
              <h3>25</h3>
              <p>Mercados parceiros</p>
            </div>

            <div className="impact-card">
              <h3>R$ 8.500</h3>
              <p>Economia gerada</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <h3>Replace</h3>
          <p>Evitando desperdícios e economizando juntos.</p>
        </div>

        <p>© 2026 Replace. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
