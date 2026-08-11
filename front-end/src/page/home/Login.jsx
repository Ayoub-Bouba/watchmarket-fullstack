import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const handleSubmit =async (e) => {
    e.preventDefault();
    const res =await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
    })
    const data = await res.json()
    if(data.token){
        localStorage.setItem("token",data.token)
        alert("The account Login")
        navigate("/")
    }else{
        alert("The account has not Login")
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>تسجيل الدخول</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>كلمة المرور</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          دخول
        </button>
        <p className="to_register" >Dont have accont? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "#29261d62",
    direction: "rtl",
    fontFamily: "sans-serif",
  },
  card: {
    backgroundColor: "#3a3232a2",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.32)",
    width: "100%",
    maxWidth: "380px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#f5f5f5e8",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    color: "#f5f5f5e8",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
