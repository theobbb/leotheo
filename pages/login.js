import { Typography } from "@mui/material";
import connectDB from '../utils/connectDB';
import User from '../models/testModel';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";

export default function Login () {
    
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const router = useRouter();
      
        const handleLogin = async () => {
          const res = await signIn("credentials", {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: "/"
          })
        }
/*
        async function handleLogin(event) {
          event.preventDefault();
          const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (!res.ok) {
            setError(data.message);
            console.error(`Error logging in: ${data.message}`);
          } else {
            router.push('/dashboard');
          }
        }*/
      
        return (
            <div>
                <Typography variant="h4">Login</Typography>
                <Typography variant="h5">theobaillargeon@hotmail.com</Typography>
                
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Login</button>
                </form>
          </div>
        );
      }