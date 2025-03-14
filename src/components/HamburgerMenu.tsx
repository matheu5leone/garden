"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react"; // Ícone de logout

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token (ou sessão)
    router.push("/login"); // Redireciona para login
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Botão do menu */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none"
      >
        ☰
      </button>

      {/* Menu suspenso */}
      {open && (
        <div className="absolute top-12 right-0 w-40 bg-white shadow-lg rounded-lg p-2">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full p-2 text-red-600 hover:bg-gray-300 rounded-md"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
