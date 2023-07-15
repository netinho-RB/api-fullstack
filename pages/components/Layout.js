// components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4">
            <li>
              <a href="/">Página Inicial</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
            {/* Adicione mais itens de navegação conforme necessário */}
          </ul>
        </nav>
      </header>
      {/* Conteúdo da página */}
      {children}
      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} Seu Site. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Layout;
