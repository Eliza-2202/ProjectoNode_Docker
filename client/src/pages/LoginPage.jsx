import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginRequest } from "../api/auth"; // Importamos el método de login

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loginErrors, setLoginErrors] = useState([]); // Manejo de errores desde el backend

  const onSubmit = async (data) => {
    try {
      // Llama al backend para iniciar sesión
      const res = await loginRequest(data);

      if (res.data) {
        // Verifica si la respuesta incluye un id o cualquier otro indicador exitoso
        console.log("Login exitoso:", res.data);

        // Almacena datos útiles, como el id o email, si es necesario
        localStorage.setItem("userId", res.data.id); 
        localStorage.setItem("userName", res.data.name);
        localStorage.setItem("userEmail", res.data.email);

        // Redirige al dashboard
        navigate("/dashboard");
      } else {
        setLoginErrors(["Error inesperado. Verifica la respuesta del backend."]);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setLoginErrors(["Error de inicio de sesión. Verifica tus credenciales."]);
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        backgroundColor: "#1e293b",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {/* Mensajes de error */}
      {loginErrors.map((error, index) => (
        <div key={index} style={{ color: "red" }}>
          {error}
        </div>
      ))}

      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Login</h1>

      {/* Formulario de inicio de sesión */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@domain.tld"
          {...register("email", { required: "El email es obligatorio" })}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #333",
            backgroundColor: "#334155",
            color: "#fff",
          }}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Escribe tu contraseña"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: { value: 6, message: "Debe tener al menos 6 caracteres" },
          })}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #333",
            backgroundColor: "#334155",
            color: "#fff",
          }}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#3b82f6",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
