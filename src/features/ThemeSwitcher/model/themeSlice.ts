import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

interface ThemeState {
	mode: Theme;
}

const initialState: ThemeState = {
	mode: 'light',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
		},
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.mode = action.payload;
		},
	},
});
export const { actions: themeActions } = themeSlice;
export const { reducer: themeReducer } = themeSlice;
