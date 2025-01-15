import { create } from 'zustand';

type WindowState = {
    movieTitleY: number; 
    setMovieTitleY: (y: number) => void;  // Action to set y position of the movie title
    // hide: () => void;  // Action to decrease the count
};

export const useMovieStore = create<WindowState>(set => ({
    movieTitleY: 0,
    setMovieTitleY: (y) => set({ movieTitleY: y }),
    // hide: () => set(state => ({isSearchInputShow: false})),  // hides the input
}));