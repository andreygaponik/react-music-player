import { useTheme } from '../../lib/hooks/useTheme';

export const ThemeSwitcher = () => {
	const { currentTheme, toggleTheme } = useTheme();

	console.log(currentTheme);

	return (
		<button onClick={toggleTheme}>
			switch theme on {currentTheme === 'light' ? 'dark' : 'light'}
		</button>
	);
};
