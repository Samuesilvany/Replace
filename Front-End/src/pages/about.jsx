import "../about.css";

export default function about() {
  return (
    <div className="sobre-page">

      
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">🍃</div>
          <span>Replace</span>
        </div>

        <nav>
          <a href="#">Início</a>
          <a href="#">Produtos</a>
          <a href="#">Mercados</a>
          <a href="#">Como funciona</a>
          <a href="#">Sobre</a>
        </nav>

        <div className="actions">
          <button className="btn-login">Entrar</button>
          <button className="btn-register">Cadastrar</button>
        </div>
      </header>

      
      <section className="hero">
        <div className="hero-icon"></div>

        <h1>Sobre a Replace</h1>

        <p>
          Transformando a forma como consumimos, reduzindo desperdícios e
          construindo um futuro mais sustentável.
        </p>
      </section>

     
      <section className="historia">
        <h2>Nossa história</h2>

        <p>
          A Replace nasceu de uma constatação alarmante: milhões de toneladas
          de alimentos são desperdiçadas todos os anos, enquanto milhões de
          pessoas buscam economia e produtos de qualidade a preços acessíveis.
        </p>
      </section>

      
      <section className="cards-section">

        <div className="info-card">
          <div className="card-icon"></div>

          <h3>Nossa Missão</h3>

          <p>
            Reduzir o desperdício de alimentos conectando consumidores
            conscientes a produtos de qualidade com preços acessíveis,
            gerando economia e promovendo sustentabilidade.
          </p>
        </div>

        <div className="info-card">
          <div className="card-icon"></div>

          <h3>Nossa Visão</h3>

          <p>
            Ser a maior plataforma de combate ao desperdício de alimentos do
            Brasil, transformando a forma como as pessoas consomem e
            contribuindo para um planeta mais sustentável.
          </p>
        </div>

        <div className="info-card">
          <div className="card-icon"></div>

          <h3>Nossos Valores</h3>

          <ul>
            <li>Sustentabilidade em primeiro lugar</li>
            <li>Transparência e honestidade</li>
            <li>Compromisso com a qualidade</li>
            <li>Impacto social positivo</li>
          </ul>
        </div>

      </section>

      
      <section className="impacto">

        <h2>Nosso impacto</h2>

        <p>Números que fazem a diferença</p>

        <div className="impact-grid">

          <div className="impact-item">
            <div className="impact-icon"></div>
            <h3>50mil+</h3>
            <span>Usuários ativos</span>
          </div>

          <div className="impact-item">
            <div className="impact-icon"></div>
            <h3>200+</h3>
            <span>Mercados parceiros</span>
          </div>

          <div className="impact-item">
            <div className="impact-icon"></div>
            <h3>15 ton</h3>
            <span>Alimentos salvos</span>
          </div>

          <div className="impact-item">
            <div className="impact-icon"></div>
            <h3>R$ 2M</h3>
            <span>Economizados</span>
          </div>

        </div>

      </section>


    </div>
  );
}