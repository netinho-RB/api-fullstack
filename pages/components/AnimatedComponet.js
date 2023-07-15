// components/AnimatedComponent.js

import React, { useState } from 'react';

const AnimatedComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
        className="p-2 bg-blue-500 text-white rounded transition-opacity"
      >
        Mostrar/Esconder
      </button>
      <div className={`bg-red-500 p-4 ${show ? 'opacity-100' : 'opacity-0'}`}>
        Conteúdo animado
      </div>
    </div>
  );
};

export default AnimatedComponent;
