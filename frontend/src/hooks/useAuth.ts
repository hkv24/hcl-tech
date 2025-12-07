'use client';

import { useEffect, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { authState, tokenState } from '@/store';
import { authAPI } from '@/lib/api';
import toast from 'react-hot-toast';

export function useAuth() {
  const [authStateValue, setAuth] = useRecoilState(authState);
  const setToken = useSetRecoilState(tokenState);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await authAPI.getMe();
          setAuth({
            user: response.data.data,
            isAuthenticated: true,
            isLoading: false,
          });
          setToken(token);
        } catch {
          localStorage.removeItem('token');
          setAuth({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } else {
        setAuth({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuth();
  }, [setAuth, setToken]);

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        setAuth((prev) => ({ ...prev, isLoading: true }));
        const response = await authAPI.login({ email, password });
        
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        setToken(token);
        setAuth({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
        
        toast.success('Login successful!');
        router.push('/');
        return { success: true };
      } catch (error: any) {
        setAuth((prev) => ({ ...prev, isLoading: false }));
        const message = error.response?.data?.message || 'Login failed';
        toast.error(message);
        return { success: false, message };
      }
    },
    [router, setAuth, setToken]
  );

  const register = useCallback(
    async (data: { name: string; email: string; password: string; phone: string }) => {
      try {
        setAuth((prev) => ({ ...prev, isLoading: true }));
        const response = await authAPI.register(data);
        
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        setToken(token);
        setAuth({
          user,
          isAuthenticated: true,
          isLoading: false,
        });

        toast.success('Registration successful!');
        router.push('/');
        return { success: true };
      } catch (error: any) {
        setAuth((prev) => ({ ...prev, isLoading: false }));
        const message = error.response?.data?.message || 'Registration failed';
        toast.error(message);
        return { success: false, message };
      }
    },
    [router, setAuth, setToken]
  );

  const logout = useCallback(async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('token');
      setToken(null);
      setAuth({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
      toast.success('Logged out successfully');
      router.push('/login');
    } catch {
      toast.error('Failed to log out');
    }
  }, [router, setAuth, setToken]);

  return {
    user: authStateValue.user,
    isAuthenticated: authStateValue.isAuthenticated,
    isLoading: authStateValue.isLoading,
    login,
    register,
    logout,
  };
}
