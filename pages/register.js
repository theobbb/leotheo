import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  async function handleRegister(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      console.error('Error registering user: Passwords do not match');
      return;
    }
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
      console.error(`Error registering user: ${data.message}`);
    } else {
      router.push('/dashboard');
    }
  }

  return (
    <form onSubmit={handleRegister}>
      {error && <div className="error">{error}</div>}
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}