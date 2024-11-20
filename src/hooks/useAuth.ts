import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (status: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: !!localStorage.getItem('spotify_access_token'),
  setIsAuthenticated: (status) => set({ isAuthenticated: status }),
}));

export const useAuth = () => {
  return useAuthStore((state) => ({
    isAuthenticated: state.isAuthenticated,
    setIsAuthenticated: state.setIsAuthenticated,
  }));
};