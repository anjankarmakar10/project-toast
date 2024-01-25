import React, { createContext, useCallback, useState } from "react";
import { useContext } from "react";
import useEscapeKey from "../../hooks/useKeyDown";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const createToast = (toast) => {
    setToasts((toasts) => [...toasts, toast]);
  };
  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEscape = useCallback(() => setToasts([]), []);

  useEscapeKey("Escape", handleEscape);

  const value = { toasts, createToast, dismissToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
