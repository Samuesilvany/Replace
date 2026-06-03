import React, { useState } from 'react';
import './DashboardMercado.css';

export default function DashboardMercado() {
  // Estado para controlar a alternância de tema (false = claro, true = escuro)
  const [darkMode, setDarkMode] = useState(false);
  // Estado para controlar a exibição dos produtos reservados (exemplo para futura lógica)
  const [showReserved, setShowReserved] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleReserved = () => {
    setShowReserved(!showReserved);
    // Aqui podes adicionar a lógica para abrir um modal ou filtrar a lista no futuro
    alert("Função para mostrar produtos reservados ativada!");
  };

  return (
    <div className={`dashboard-wrapper ${darkMode ? 'dark-theme' : ''}`}>
      {/* Menu Superior */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="brand">
            {/* Nova Logo: Folha dentro do quadrado verde arredondado */}
            <svg className="brand-icon-container" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="12" fill="#2ecc71"/>
              <path d="M28 14C24 14 16 16 14 22C13.5 23.5 13.5 25.5 15 26.5C16.5 27.5 19 27 20.5 26C25.5 22.5 27 16 28 14Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 26L20 20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span className="brand-text">Replace</span>
          </div>
        </div>

        <div className="navbar-center">
          <div className="nav-links">
            <a href="#inicio" className="active">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#mercados">Mercados</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre</a>
          </div>
        </div>

        <div className="navbar-right">
          <a href="#sair" className="btn-login-text">Sair</a>
          <button className="btn-theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
            {darkMode ? (
              <span className="theme-icon">☀️ Modo Claro</span>
            ) : (
              <span className="theme-icon">🌙 Modo Escuro</span>
            )}
          </button>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="dashboard-container">
        <header className="welcome-section">
          <h1>Bom dia, Mercado Catarinense</h1>
          <p>Hoje você recuperou <strong>R$ 482,00</strong> em produtos que seriam descartados.</p>
        </header>

        {/* Grade de Métricas */}
        <section className="metrics-grid">
          <div className="metric-card">
            <span className="metric-title">Receita Recuperada</span>
            <div className="metric-value">R$ 12.450</div>
            <span className="metric-sub text-positive">+18% em relação ao mês passado</span>
          </div>
          
          <div className="metric-card">
            <span className="metric-title">Desperdício Evitado</span>
            <div className="metric-value">890 kg</div>
            <span className="metric-sub text-custom-white">alimentos salvos no descarte</span>
          </div>

          <div className="metric-card">
            <span className="metric-title">Pedidos Concluídos</span>
            <div className="metric-value">248</div>
            <span className="metric-sub text-custom-white">18 pedidos hoje</span>
          </div>

          {/* Nova Métrica: Produtos Reservados */}
          <div className="metric-card card-reserved" onClick={handleToggleReserved}>
            <span className="metric-title">Produtos Reservados</span>
            <div className="metric-value">12</div>
            <span className="metric-sub text-reserved">Aguardando recolha do cliente</span>
          </div>

          <div className="metric-card card-alert">
            <span className="metric-title">Produtos Críticos</span>
            <div className="metric-value">7</div>
            <span className="metric-sub text-alert">Precisam de promoção urgente</span>
          </div>
        </section>

        {/* Lista de Alertas */}
        <section className="alerts-section">
          <div className="alerts-header">
            <h2>Vencendo em Breve</h2>
            {/* Botão Global para mostrar o que está reservado */}
            <button className="btn-view-reserved" onClick={handleToggleReserved}>
              📋 Ver Todos os Reservados
            </button>
          </div>
          
          <div className="product-alert-list">
              
            <div className="product-alert-item">
              <div className="product-info">
                <h4>Banana Prata</h4>
                <p>42 unidades • Vence em 2 dias</p>
              </div>
              <div className="product-actions">
                <button className="btn-promo">Criar Promoção</button>
              </div>
            </div>

            <div className="product-alert-item">
              <div className="product-info">
                <h4>Tomate</h4>
                <p>18 unidades • Vence amanhã • <span className="text-reserved">5 já reservados</span></p>
              </div>
              <div className="product-actions">
                <button className="btn-view-item-reserved" onClick={handleToggleReserved}>Ver Reservados</button>
                <button className="btn-promo">Criar Promoção</button>
              </div>
            </div>

            <div className="product-alert-item">
              <div className="product-info">
                <h4>Pão Francês</h4>
                <p>Estoque diário • Atualizar lote</p>
              </div>
              <div className="product-actions">
                <button className="btn-promo">Criar Promoção</button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}