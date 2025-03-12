export const register = async (name: string, password: string, role: string) => {
    const response = await fetch("https://hall-axq2.onrender.com/auth/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password, role }),
    });

    if (response.ok) {
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};  
      console.log("Usuário registrado com sucesso!", data);
      return data;
    } else {
      const text = await response.text();
      const errorData = text ? JSON.parse(text) : {};
      console.error("Falha no registro", errorData);
      throw new Error(errorData.message || "Erro ao registrar usuário");
    }
};
