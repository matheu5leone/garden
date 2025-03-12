export const login = async (name: string, password: string) => {
    const response = await fetch("http://localhost:8080/auth/login", {
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
  