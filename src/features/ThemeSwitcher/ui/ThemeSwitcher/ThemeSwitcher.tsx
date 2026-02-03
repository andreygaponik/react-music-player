import { useTheme } from '../../lib/hooks/useTheme';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeSwitcher = () => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<IconButton sx={{ ml: 1 }} onClick={toggleTheme} color='inherit'>
			{currentTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
};
