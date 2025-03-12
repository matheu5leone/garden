// src/app/home/page.tsx
import React from 'react';
import Link from 'next/link';  // Importando o Link do Next.js

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-blue-500">Bem-vindo à Home!</h1>
        <p className="mt-4 text-center">Escolha uma opção abaixo para continuar:</p>

        <div className="mt-6 flex flex-col gap-4">
          {/* Botão para login */}
          <Link href="/login" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-center">
            Ir para Login
          </Link>

          {/* Botão para registro */}
          <Link href="/register" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 text-center">
            Ir para Registro
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
