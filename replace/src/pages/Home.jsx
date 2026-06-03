import React from "react";

export default function Home({ setTelaAtiva, irParaCadastro }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 40px", boxSizing: "border-box" }}>
      {/* HERO SECTION - TOTALMENTE ALINHADA À ESQUERDA */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", maxWidth: "700px", marginBottom: "48px" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "#0f172a", lineHeight: "1.15", letterSpacing: "-1.5px", margin: "0 0 24px 0" }}>
          Evite desperdícios.<br />Economize todos os dias.
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#475569", margin: "0 0 36px 0", lineHeight: "1.6" }}>
          Produtos próximos da validade com grandes descontos. Bom para o seu bolso, perfeito para o meio ambiente.
        </p>
        
        <div style={{ display: "flex", gap: "16px" }}>
          <button onClick={() => setTelaAtiva("produtos")} style={{ backgroundColor: "#22c55e", color: "white", border: "none", padding: "14px 28px", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: "pointer" }}>
            Ver ofertas ➔
          </button>
          <button onClick={irParaCadastro} style={{ backgroundColor: "transparent", color: "#16a34a", border: "2px solid #22c55e", padding: "14px 28px", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: "pointer" }}>
            Sou um mercado
          </button>
        </div>
      </div>

      {/* IMAGEM DA CAPA DO SITE */}
      <div style={{ width: "100%", borderRadius: "24px", overflow: "hidden", marginBottom: "64px" }}>
        <img 
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80" 
          alt="Alimentos Frescos e Selecionados" 
          style={{ width: "100%", height: "450px", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* SEÇÃO DOS 3 CARDS INFERIORES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        <div style={{ background: "#f8fafc", padding: "36px 32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <div style={{ backgroundColor: "rgba(34, 197, 94, 0.12)", width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px", color: "#22c55e" }}>🏷️</div>
          <h3 style={{ fontSize: "1.25rem", color: "#0f172a", marginBottom: "12px", fontWeight: "700" }}>Descontos reais</h3>
          <p style={{ color: "#475569", lineHeight: "1.6", fontSize: "0.95rem", margin: 0 }}>Economize muito levando produtos excelentes com até 70% de desconto direto do mercado.</p>
        </div>

        <div style={{ background: "#f8fafc", padding: "36px 32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <div style={{ backgroundColor: "rgba(34, 197, 94, 0.12)", width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px", color: "#22c55e" }}>🌱</div>
          <h3 style={{ fontSize: "1.25rem", color: "#0f172a", marginBottom: "12px", fontWeight: "700" }}>Sustentável</h3>
          <p style={{ color: "#475569", lineHeight: "1.6", fontSize: "0.95rem", margin: 0 }}>Evite o descarte de comida boa e ajude a construir um consumo consciente e ecológico.</p>
        </div>

        <div style={{ background: "#f8fafc", padding: "36px 32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <div style={{ backgroundColor: "rgba(34, 197, 94, 0.12)", width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "24px", color: "#22c55e" }}>✨</div>
          <h3 style={{ fontSize: "1.25rem", color: "#0f172a", marginBottom: "12px", fontWeight: "700" }}>Produtos de qualidade</h3>
          <p style={{ color: "#475569", lineHeight: "1.6", fontSize: "0.95rem", margin: 0 }}>Alimentos bem guardados e inspecionados por nossos parceiros, prontos para consumo.</p>
        </div>
      </div>
    </div>
  );
}