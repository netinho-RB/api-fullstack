// pages/index.js

import React from 'react';
import ResponsiveLayout from '../components/ResponsiveLayout';

const Home = () => {
  return (
    <ResponsiveLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-800">Bem-vindo ao meu site!</h1>
        <p className="text-lg text-blue-600 mt-4">
          Este é um exemplo de página usando o Tailwind CSS no Next.js.
        </p>
      </div>
    </ResponsiveLayout>
  );
};

export default Home;
