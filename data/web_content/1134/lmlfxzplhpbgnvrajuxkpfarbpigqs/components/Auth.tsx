
import React, { useState } from 'react';

interface AuthProps {
  onAuthenticate: (success: boolean) => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuthenticate }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (code === 'webdemo123') {
      setError('');
      onAuthenticate(true);
    } else {
      setError('Código incorrecto. Por favor, inténtalo de nuevo.');
      setCode('');
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-sm text-center animate-fade-in">
        <h1 className="text-2xl font-serif text-accent mb-4">Autenticación Requerida</h1>
        <p className="text-secondary mb-6">Por favor, introduce el código de acceso para ver el sitio.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código de Acceso"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            aria-label="Código de Acceso"
            aria-required="true"
          />
          <button
            type="submit"
            className="bg-accent text-background font-bold py-3 px-4 rounded-md hover:bg-accent-hover transition-all duration-300 transform hover:scale-105"
          >
            Entrar
          </button>
        </form>
        {error && <p className="text-red-500 mt-4 text-sm" role="alert">{error}</p>}
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
