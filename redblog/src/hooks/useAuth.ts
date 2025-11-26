import { useState, useEffect, createContext, useContext } from 'react';

interface AuthContextType {
  user: any; // Define a more specific type based on your user structure
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Define a more specific type based on your user structure

  const login = async (username: string, password: string) => {
    // Implement your login logic here
    // For example, call an API to authenticate the user
    // On success, set the user state
  };

  const logout = () => {
    // Implement your logout logic here
    // For example, clear user state and any tokens
    setUser(null);
  };

  useEffect(() => {
    // Check for existing user session on mount
    // For example, check local storage or call an API
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};