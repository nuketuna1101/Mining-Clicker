import { useState } from 'react';
import { showAlert, showToast } from '../services/swalService';
import { useAuth } from '../contexts/LoginContext';

// 커스텀 훅: useLogin
export const useLogin = () => {
    //const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isCertified, setIsCertified, username, setUsername} = useAuth();

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
                showToast(
                    "Login Success", 
                    "success", 
                    3000
                );
                // 로그인 성공, 인증됨 상태 넘겨주기
                setIsCertified(true);
            }
            else {
                showAlert(
                    "Error", `Error on response: ${data.message}`, 
                    "error"
                );
            }
        } catch (error: any) {
            showAlert(
                "Error", 
                `Error on fetching : ${error.message}`, 
                "error"
            );
        }
    };

    const logout = () => {
        setIsCertified(false);
        setUsername('');
    };

    return {
        username, setUsername,
        password, setPassword,
        login, isCertified
    };
}