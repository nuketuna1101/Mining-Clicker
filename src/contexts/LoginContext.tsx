// Context API 통한 로그인 상태 저장

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginContextType {
    isCertified: boolean;
    setIsCertified: (value: boolean) => void;

    username: string;
    setUsername: (value: string) => void;
}
interface LoginProviderProps {
    unauthChildren: ReactNode;
    authChildren: ReactNode;
}


const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<LoginProviderProps> = ({ unauthChildren, authChildren }) => {
    const [isCertified, setIsCertified] = useState(false);
    const [username, setUsername] = useState('');
    return (
        <LoginContext.Provider value={{ isCertified, setIsCertified, username, setUsername }}>
            {isCertified ?  authChildren  : unauthChildren}
        </LoginContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(LoginContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
