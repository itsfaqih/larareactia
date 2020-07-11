import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '@/Layouts/Main';

export default function Welcome() {
  return (
    <MainLayout>
      <Helmet title="Welcome" />
      <div className="flex flex-col items-center">
        <h1 className="mb-2 text-5xl font-semibold">LaraReactia</h1>
        <h2 className="mb-6 text-xl font-medium text-indigo-600">Project starter</h2>
        <p className="text-gray-600">Laravel + Inertia.js + React + TailwindCSS</p>
      </div>
    </MainLayout>
  );
}