import { describe, expect, it } from 'vitest';
import { themeActions, themeReducer, type ThemeState } from './themeSlice';

describe('themeSlice reducer', () => {
	it('should handle initial state', () => {
		const initialState: ThemeState = { mode: 'light' };

		expect(themeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});

	it('should handle toggleTheme from light to dark', () => {
		const previousState: ThemeState = { mode: 'light' };
		const newState = themeReducer(previousState, themeActions.toggleTheme());
		expect(newState.mode).toEqual('dark');
	});

	it('should handle toggleTheme from dark to light', () => {
		const previousState: ThemeState = { mode: 'dark' };
		const newState = themeReducer(previousState, themeActions.toggleTheme());
		expect(newState.mode).toEqual('light');
	});

	it('should handle setTheme action', () => {
		const previousState: ThemeState = { mode: 'light' };
		const newState = themeReducer(previousState, themeActions.setTheme('dark'));
		expect(newState.mode).toEqual('dark');
	});
});
