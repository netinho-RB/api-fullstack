// components/Navigation.js

import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="text-blue-600">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/api-example">
            <a className="text-blue-600">API Example</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
