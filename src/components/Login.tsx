"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importação correta para Next.js App Router
import { login } from "../service/login";
import { Loader2 } from "lucide-react"; // Importação do ícone de carregamento do Lucide React

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);  // Estado para controlar o carregamento
  const router = useRouter(); // Hook para navegação

  const handleLogin = async () => {
    setLoading(true);  // Ativa o carregamento
    try {
      const response = await login(name, password);
      console.log("Usuário logado com sucesso:", response);

      // Aguarda 3 segundos antes de redirecionar
      setTimeout(() => {
        setLoading(false);  // Desativa o carregamento
        router.push("/home"); // Redireciona para a página home
      }, 3000);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setLoading(false);  // Desativa o carregamento em caso de erro
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Botão de Login */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={loading} // Desabilita o botão enquanto carrega
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin mr-2" size={20} /> {/* Ícone de carregamento */}
              Carregando...
            </div>
          ) : (
            "Login"
          )}
        </button>

        {/* Botão "Crie uma conta" */}
        <button
          onClick={() => router.push("/register")}
          className="w-full mt-3 py-2 text-blue-500 font-semibold rounded-lg border border-blue-500 hover:bg-blue-50 transition duration-200"
        >
          Crie uma conta
        </button>
      </div>
    </div>
  );
};

export default Login;
