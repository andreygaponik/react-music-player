import { useTheme } from '@/features/ThemeSwitcher/lib/hooks/useTheme';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	CssBaseline,
} from '@mui/material';
import { type ReactNode, useMemo } from 'react';

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { currentTheme } = useTheme();

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: currentTheme,
					primary: {
						main: '#121212',
					},
				},
				typography: {
					h1: {
						fontSize: '1.2rem',
					},
				},
			}),
		[currentTheme],
	);

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			{props.children}
		</MuiThemeProvider>
	);
};
