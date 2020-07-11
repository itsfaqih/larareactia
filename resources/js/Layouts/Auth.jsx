import React from 'react';
import Helmet from 'react-helmet';

export default function AuthLayout({ children }) {
  return (
    <>
      <Helmet titleTemplate={`${app.name} | %s`} />
      <main>
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}