import { create } from 'zustand';

type CounterState = {
    isSearchInputShow: boolean;  // This holds the current count
    show: () => void;  // Action to increase the count
    hide: () => void;  // Action to decrease the count
};

export const useSearchStore = create<CounterState>(set => ({
    isSearchInputShow: false,  // Initial state of the count
    show: () => set(state => ({isSearchInputShow: true})),  // shows the input
    hide: () => set(state => ({isSearchInputShow: false})),  // hides the input
}));