import React from "react";
import "./Home.css";

import heroImg from "../assets/hero.png";
import googleLogo from "../assets/google-logo-removebg-preview.png";

export default function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-header__inner">
          <div className="home-logo" aria-label="Replace">
            {/* Logo oficial deve estar em assets; por enquanto reaproveitamos o asset existente */}
            <img className="home-logo__img" src={googleLogo} alt="Replace" />
            <span className="home-logo__text">Replace</span>
          </div>

          <nav className="home-nav" aria-label="Navegação principal">
            <a href="#" className="home-nav__link">
              Início
            </a>
            <a href="#" className="home-nav__link">
              Produtos
            </a>
            <a href="#" className="home-nav__link">
              Mercados
            </a>
            <a href="#" className="home-nav__link">
              Como funciona
            </a>
            <a href="#" className="home-nav__link">
              Sobre
            </a>
          </nav>

          <div className="home-actions">
            <button className="home-btn home-btn--ghost">Entrar</button>
            <button className="home-btn">Cadastrar</button>
          </div>
        </div>
      </header>

      <main>
        <section className="home-hero">
          <div className="home-hero__inner">
            <div className="home-hero__content">
              <h1 className="home-hero__title">
                Evite desperdícios. Economize todos os dias.
              </h1>

              <p className="home-hero__subtitle">
                Produtos próximos da validade com grandes descontos. Bom para
                você, ótimo para o planeta.
              </p>

              <div className="home-hero__selo">
                <span className="home-hero__selo-icon">🌱</span>
                Sustentabilidade e economia em um só lugar
              </div>

              <div className="home-hero__cta">
                <button className="home-btn home-btn--primary">
                  Ver ofertas
                </button>
                <button className="home-btn home-btn--ghost">
                  Sou um mercado
                </button>
              </div>

              <div className="home-hero__note">Sustentável e econômico</div>
            </div>

            <div className="home-hero__media" aria-label="Destaque de desconto">
              <div className="discount-badge">-70%</div>
              <img className="home-hero__img" src={heroImg} alt="Desconto" />
            </div>
          </div>
        </section>

        <section className="home-benefits">
          <div className="home-section__inner">
            <h2 className="home-section__title">Por que o Replace funciona</h2>
            <div className="home-benefits__grid">
              <div className="benefit-card">
                <div className="benefit-card__icon">💸</div>
                <h3 className="benefit-card__title">Economize mais</h3>
                <p className="benefit-card__text">
                  Ofertas com desconto direto no momento certo.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-card__icon">🌿</div>
                <h3 className="benefit-card__title">Reduza desperdícios</h3>
                <p className="benefit-card__text">
                  Menos descarte, mais consumo consciente.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-card__icon">🏪</div>
                <h3 className="benefit-card__title">Apoie mercados locais</h3>
                <p className="benefit-card__text">
                  Conecte seu bairro a produtos próximos da validade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="home-steps" id="como-funciona">
          <div className="home-section__inner">
            <h2 className="home-section__title">Como funciona</h2>
            <div className="home-steps__grid">
              <div className="step-card">
                <div className="step-card__num">1</div>
                <div>
                  <h3 className="step-card__title">
                    Mercados cadastram produtos próximos da validade
                  </h3>
                  <p className="step-card__text">
                    Envie itens com desconto para reduzir o descarte.
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-card__num">2</div>
                <div>
                  <h3 className="step-card__title">
                    Consumidores encontram ofertas
                  </h3>
                  <p className="step-card__text">
                    Escolha o produto e garanta o preço especial.
                  </p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-card__num">3</div>
                <div>
                  <h3 className="step-card__title">
                    Produtos são aproveitados antes do descarte
                  </h3>
                  <p className="step-card__text">
                    O alimento chega a quem vai consumir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-impact" id="impacto">
          <div className="home-section__inner">
            <h2 className="home-section__title">Gerando impacto positivo</h2>
            <div className="home-impact__grid">
              <div className="impact-card">
                <div className="impact-card__icon">♻️</div>
                <div className="impact-card__value">1.200kg</div>
                <div className="impact-card__label">reaproveitados</div>
              </div>

              <div className="impact-card">
                <div className="impact-card__icon">🏪</div>
                <div className="impact-card__value">25</div>
                <div className="impact-card__label">mercados parceiros</div>
              </div>

              <div className="impact-card">
                <div className="impact-card__icon">💚</div>
                <div className="impact-card__value">R$ 8.500</div>
                <div className="impact-card__label">economizados</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-footer__inner">
          <div className="home-footer__brand">
            <div className="home-logo home-logo--footer" aria-label="Replace">
              <span className="home-logo__mark">🍃</span>
              <span className="home-logo__text">Replace</span>
            </div>
            <p className="home-footer__text">
              Evitando desperdícios e economizando juntos.
            </p>
          </div>

          <div className="home-footer__cols" aria-label="Links do rodapé">
            <div className="footer-col">
              <div className="footer-col__title">Produto</div>
              <a href="#" className="footer-col__link">
                Como funciona
              </a>
              <a href="#" className="footer-col__link">
                Preços
              </a>
              <a href="#" className="footer-col__link">
                Para mercados
              </a>
            </div>

            <div className="footer-col">
              <div className="footer-col__title">Empresa</div>
              <a href="#" className="footer-col__link">
                Sobre nós
              </a>
              <a href="#" className="footer-col__link">
                Carreiras
              </a>
              <a href="#" className="footer-col__link">
                Blog
              </a>
            </div>

            <div className="footer-col">
              <div className="footer-col__title">Suporte</div>
              <a href="#" className="footer-col__link">
                Central de ajuda
              </a>
              <a href="#" className="footer-col__link">
                Contato
              </a>
              <a href="#" className="footer-col__link">
                Termos de uso
              </a>
            </div>
          </div>
        </div>

        <div className="home-footer__copy">
          © 2026 Replace. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
