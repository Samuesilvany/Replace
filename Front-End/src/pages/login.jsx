import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import googleLogo from "../assets/google-logo-removebg-preview.png";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo-container">
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 2 .5 10a7 7 0 0 1-8.5 8z" />
            <path d="M19 2c-5.07 4.93-8.59 8.44-12 15" />
          </svg>
          <span className="logo-text">Replace</span>
        </div>
        <h1 className="login-title">Bem-vindo de volta</h1>
        <p className="login-subtitle">
          Entre na sua conta para continuar economizando
        </p>
      </div>

      <div className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input type="email" id="email" placeholder="seu@email.com" />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <svg
                className="input-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input type="password" id="password" placeholder="••••••••" />
            </div>
          </div>

          <div className="options-row">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Lembrar-me
            </label>
            <a href="#forgot" className="forgot-link">
              Esqueceu a senha?
            </a>
          </div>

          <button type="submit" className="submit-btn">
            Entrar
            <svg
              className="arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>

        <div className="login-divider">
          <span>ou continue com</span>
        </div>

        <div className="social-row">
          <button className="social-btn">
            <img src={googleLogo} alt="Google" />
            Google
          </button>
          <button className="social-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
              alt="Facebook"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
