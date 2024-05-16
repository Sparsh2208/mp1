// LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ changePage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication logic (replace with actual authentication)
    if (email === 'admin@example.com' && password === 'admin') {
      alert('Login successful');
      // Navigate to dashboard after successful login
      changePage('dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p className="create-account-link" onClick={() => changePage('signup')}>Create an account</p>
      </form>
    </div>
  );
};

export default LoginPage;
