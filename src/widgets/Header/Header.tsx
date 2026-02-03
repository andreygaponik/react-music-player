import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Search } from '@/features/Search';

export const Header = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Box sx={{ flex: 1 }}>
					<Typography variant='h1' noWrap component='div'>
						React Music Player
					</Typography>
				</Box>

				<Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
					<Search />
				</Box>

				<Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
					<ThemeSwitcher />
				</Box>
			</Toolbar>
		</AppBar>
	);
};
