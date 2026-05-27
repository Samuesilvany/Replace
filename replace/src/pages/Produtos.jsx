import "./Produtos.css";

export default function Produtos() {
  const listaProdutos = [
    {
      id: 1,
      nome: "Iogurte Natural",
      peso: "500g",
      precoAntigo: "R$ 12,90",
      precoAtual: "R$ 3,87",
      desconto: "-70%",
      validade: "Vence amanhã",
      imagem: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      nome: "Filé de Frango",
      peso: "1kg",
      precoAntigo: "R$ 24,90",
      precoAtual: "R$ 9,96",
      desconto: "-60%",
      validade: "Vence amanhã",
      imagem: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      nome: "Queijo Mussarela",
      peso: "500g",
      precoAntigo: "R$ 32,90",
      precoAtual: "R$ 11,52",
      desconto: "-65%",
      validade: "Vence amanhã",
      // LINK CORRIGIDO: Imagem real de queijo fresco!
      imagem: "https://images.unsplash.com/photo-1552763440-47448db7eae9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      nome: "Tomate Salada",
      peso: "1kg",
      precoAntigo: "R$ 9,90",
      precoAtual: "R$ 4,95",
      desconto: "-50%",
      validade: "Vence amanhã",
      imagem: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="produtos-page">
      
      {/* NAVBAR */}
      <header className="navbar-produtos">
        <div className="logo-prod">
          <div className="logo-icon-prod">🍃</div>
          <h2>Replace</h2>
        </div>
        <nav className="nav-prod">
          <a href="#inicio">Início</a>
          <a href="#produtos" className="active">Produtos</a>
          <a href="#mercados">Mercados</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <div className="nav-buttons-prod">
          <button className="login-btn-prod">Entrar</button>
          <button className="register-btn-prod">Cadastrar</button>
        </div>
      </header>

      {/* TITULO CENTRAL */}
      <section className="produtos-hero">
        <h1>Ofertas disponíveis</h1>
        <p>Produtos frescos com grandes descontos</p>
      </section>

      {/* GRID DE PRODUTOS */}
      <main className="produtos-container">
        <div className="produtos-grid">
          {listaProdutos.map((produto) => (
            <div key={produto.id} className="produto-card">
              
              <div className="card-image-wrapper">
                <span className="badge-desconto">{produto.desconto}</span>
                <img src={produto.imagem} alt={produto.nome} />
              </div>

              <div className="card-info">
                <h3>{produto.nome}</h3>
                <span className="produto-peso">{produto.peso}</span>
                
                <div className="precos-wrapper">
                  <span className="preco-antigo">{produto.precoAntigo}</span>
                  <span className="preco-atual">{produto.precoAtual}</span>
                </div>

                <div className="validade-tag">
                  {produto.validade}
                </div>

                <button className="btn-reservar">
                  Reservar
                </button>
              </div>

            </div>
          ))}
        </div>
      </main>

    </div>
  );
}