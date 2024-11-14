import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginContextType {
    isCertified: boolean;
    setIsCertified: (value: boolean) => void;

    username: string;
    setUsername: (value: string) => void;
}
interface LoginProviderProps {
    children: ReactNode;
}


const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [isCertified, setIsCertified] = useState(false);
    const [username, setUsername] = useState('');
    return (
        <LoginContext.Provider value={{ isCertified, setIsCertified, username, setUsername }}>
            {children}
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
