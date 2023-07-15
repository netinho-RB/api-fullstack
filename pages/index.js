// pages/index.js

import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Bem-vindo ao meu site!</h1>
        <p className="text-lg mt-4">
          Este é um exemplo de página usando o Tailwind CSS no Next.js.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
