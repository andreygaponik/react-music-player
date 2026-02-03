import { InputBase, styled } from '@mui/material';

const StyledSearch = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor:
		theme.palette.mode === 'light'
			? 'rgba(0, 0, 0, 0.15)'
			: 'rgba(255, 255, 255, 0.15)',
	'&:hover': {
		backgroundColor:
			theme.palette.mode === 'light'
				? 'rgba(0, 0, 0, 0.25)'
				: 'rgba(255, 255, 255, 0.25)',
	},
	margin: theme.spacing(0, 2),
	width: '30%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 2),
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));

export const Search = () => {
	return (
		<StyledSearch>
			<StyledInputBase placeholder='Search…' />
		</StyledSearch>
	);
};
