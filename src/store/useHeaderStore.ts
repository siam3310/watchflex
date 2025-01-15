import { create } from 'zustand';

type WindowState = {
    headerHeight: number;  // This holds the current count
    setHeaderHeight: (x: number) => void;  // Action to increase the count
    // hide: () => void;  // Action to decrease the count
};

export const useHeaderStore = create<WindowState>(set => ({
    headerHeight: 0,
    setHeaderHeight: (x) => set({ headerHeight: x }),
    // hide: () => set(state => ({isSearchInputShow: false})),  // hides the input
}));