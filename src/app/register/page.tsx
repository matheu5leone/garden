"use client";  // Marca o componente como do cliente, para usar hooks como useState

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Importa o hook de navegação do Next.js
import { register } from '@/service/register'; // Importa o serviço de registro

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');  // A role pode ser USER, ADMIN, etc.
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();  // Instancia o hook para navegação

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register(name, password, role); // Chama o serviço de registro
      setSuccessMessage('Usuário registrado com sucesso!'); // Mostra mensagem de sucesso
      setError(''); // Limpa possíveis erros
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erro desconhecido');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Registrar</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Nome"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Senha"
              required
            />
          </div>
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="USER">Usuário</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">
            Registrar
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          {successMessage && <p className="mt-4 text-green-500 text-center">{successMessage}</p>}
        </form>

        {/* Botão "Já cadastrado?" para redirecionar para o login */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <button
              onClick={() => router.push("/login")}  // Redireciona para a página de login
              className="text-blue-500 hover:underline"
            >
              Faça login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
