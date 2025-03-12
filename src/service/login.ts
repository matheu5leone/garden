export const login = async (name: string, password: string) => {
    const response = await fetch("https://hall-axq2.onrender.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });
  
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log("Login realizado com sucesso!");
    } else {
      console.error("Falha no login");
    }
  };
  