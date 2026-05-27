import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">🍃</div>
          <h2>Replace</h2>
        </div>

        <nav>
          <a href="#inicio" className="active">Início</a>
          <a href="#produtos">Produtos</a>
          <a href="#mercados">Mercados</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <div className="nav-buttons">
          <button className="login-btn">Entrar</button>
          <button className="register-btn">Cadastrar</button>
        </div>
      </header>

      {/* PRIMEIRA TELA (HERO SECTION) */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Evite <br />
            desperdícios. <br />
            Economize todos <br />
            os dias.
          </h1>

          <p>
            Produtos próximos da validade com grandes descontos. <br />
            Bom para você, ótimo para o planeta.
          </p>

          <div className="hero-buttons">
            <button className="offers-btn">
              Ver ofertas &nbsp; ➔
            </button>
            <button className="market-btn">
              Sou um mercado
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <div className="discount-badge">-70%</div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Sacola com frutas frescas do Figma"
            />
            <div className="floating-card">
              <span className="card-icon">🍃</span> Sustentável e econômico
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA TELA (SEÇÃO DE BENEFÍCIOS) */}
      <section className="features-section">
        <div className="features-container">
          
          {/* Card 1 - Dinheiro */}
          <div className="feature-card">
            <div className="feature-icon-box">💰</div>
            <h3>Descontos reais</h3>
            <p>Até 70% de desconto em produtos de qualidade próximos da validade.</p>
          </div>

          {/* Card 2 - Folha */}
          <div className="feature-card">
            <div className="feature-icon-box">🌿</div>
            <h3>Sustentável</h3>
            <p>Ajude a reduzir o desperdício de alimentos e proteja o meio ambiente.</p>
          </div>

          {/* Card 3 - Selo de Qualidade Garantida */}
          <div className="feature-card">
            <div className="feature-icon-box">✅</div>
            <h3>Produtos de qualidade</h3>
            <p>Alimentos frescos e selecionados de mercados parceiros confiáveis.</p>
          </div>

        </div>
      </section>

    </div>
  );
}