import { useState } from 'react';

// 커스텀 훅: useMining
export const useLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // login : 현재 단계에선 10% 진행도 증가
    const login = async () => {
        // post 요청 전송 : auth/login
        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(`[Success] ${data}`);
            }
            else {
                console.log(`[Error] response err: ${data.message}`);
            }
        } catch (error: any) {
            console.log(`[Error] fetch err: ${error.message}`);
        }
    };

    return {
        username, setUsername,
        password, setPassword,
        login,
    };
}