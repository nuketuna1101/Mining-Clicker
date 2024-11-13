import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useLogin } from '../../hooks/useLogin';
import './Login.css';

const Login: React.FC = () => {
    // username과 password 상태
    const { username, setUsername, password, setPassword, login } = useLogin();
    // 페이드인 애니메이션
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 750 }
    });
    // login 버튼 누를시 : 
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // useLogin hook을 통한 login 로직
        login();
    };

    return (
        <animated.div style={fadeIn} className="login-container">
            <h2 className="login-header">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="login-section-username">
                    <label className="login-label" htmlFor="username">User Name</label>
                    <input
                        className="login-input"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Enter your username!')}
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="login-section-password">
                    <label className="login-label" htmlFor="password">Password</label>
                    <input
                        className="login-input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Enter your password!')}
                        onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <button className="button-login" type="submit">Login</button>
            </form>
        </animated.div>
    );
};

export default Login;
