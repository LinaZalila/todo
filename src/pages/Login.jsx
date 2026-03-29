import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const { user, setUser } = props;
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'lina@example.com' && password === '123') {
            // Login successful
           
            setUser({ name: 'Lina', email: 'lina@example.com', password: '123' });
            localStorage.setItem('user', JSON.stringify({ name: 'Lina', email: 'lina@example.com', password: '123' }));
            navigate('/')
        } else {
            // Login failed
            alert('Invalid email or password');
        }
        // Here you can add your login logic, such as sending a request to your backend
    };
  return (
    <div>
        <h1>Login Page</h1>
        <p>This is the login page. You can add your login form here.</p>
        <form onSubmit={handleSubmit}   >
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={(e) =>setEmail(e.target.value)} className='form-control' type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={(e) =>setPassword(e.target.value)} className='form-control' type="password" id="password" name="password" required />
            </div>
            <button className='btn btn-primary' onSubmit={handleSubmit}  type="submit">Login</button>
        </form>
    </div>
  )
}
