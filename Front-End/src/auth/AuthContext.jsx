import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const AuthContext = createContext(null);

const USUARIO_KEY = "usuarioLogado";

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(USUARIO_KEY);
      if (raw) {
        setUsuario(JSON.parse(raw));
      }
    } catch {
      // se localStorage estiver corrompido, ignorar
      setUsuario(null);
    }
  }, []);

  const login = useCallback((usuarioObj) => {
    setUsuario(usuarioObj);
    localStorage.setItem(USUARIO_KEY, JSON.stringify(usuarioObj));
  }, []);

  const logout = useCallback(() => {
    setUsuario(null);
    localStorage.removeItem(USUARIO_KEY);
  }, []);

  const value = useMemo(
    () => ({ usuario, login, logout }),
    [usuario, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
