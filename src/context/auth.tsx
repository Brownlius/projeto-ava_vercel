import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_db');

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user: string) => user.ra === JSON.parse(userToken).ra
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const singin = ({ ra, password }: any) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db'));

    const hasUser = usersStorage?.filter((user: any) => user.ra === ra.password);
  };

  return <AuthContext.Provider value={''}>{children}</AuthContext.Provider>;
};
