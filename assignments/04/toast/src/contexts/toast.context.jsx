// 1. 만든다. => createContext
// 2. 사용한다. => useContext
// 3. 범위를 지정해서 값을 내려준다. => context.Provider

import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToastItem from "../components/ToastItem";

// placeholder
const initialValue = {
  open: () => {},
  close: () => {},
};

const ToastContext = createContext(initialValue);

export const useToast = () => useContext(ToastContext);

// children으로 자식인 App이 들어간다.
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  // const [toastOptions, setToastOptions] = useState(null);

  const value = {
    open: (options) => {
      // setToastOptions(options);
      setToasts((prevToasts) => [
        ...prevToasts,
        { ...options, id: uuidv4(), creactedAt: Date.now() },
      ]);
    },
    close: (id) => {
      // setToastOptions(null);
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    },
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            id={toast.id}
            title={toast.title}
            content={toast.content}
            time={toast.time}
            createdAt={toast.creactedAt}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
