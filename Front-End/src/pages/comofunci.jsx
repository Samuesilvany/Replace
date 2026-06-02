import {
  Store,
  Calculator,
  Heart,
} from "lucide-react";
import "./comofunci.css";

export default function HowItWorks() {
  return (
    <div className="como-funciona">
      <div className="container">
        <h1>Como funciona</h1>
        <p className="subtitle">Simples, rápido e sustentável</p>

        <div className="steps">
          <div className="line"></div>

          <div className="step">
            <div className="icon-circle">
              <Store size={34} />
            </div>

            <h3>Mercados cadastram produtos</h3>

            <p>
              Estabelecimentos parceiros cadastram produtos
              próximos da validade na plataforma.
            </p>
          </div>

          <div className="step">
            <div className="icon-circle">
              <Calculator size={34} />
            </div>

            <h3>Sistema calcula descontos</h3>

            <p>
              Nossa plataforma calcula automaticamente os
              melhores descontos baseados na validade.
            </p>
          </div>

          <div className="step">
            <div className="icon-circle">
              <Heart size={34} />
            </div>

            <h3>Você economiza e ajuda o planeta</h3>

            <p>
              Reserve produtos com desconto, economize
              dinheiro e reduza o desperdício de alimentos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}