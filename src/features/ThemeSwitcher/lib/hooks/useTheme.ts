import type { RootState } from '@/app/providers/store';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from '../../model/themeSlice';

export const useTheme = () => {
	const dispatch = useDispatch();
	const currentTheme = useSelector((state: RootState) => state.theme.mode);

	const toggleTheme = () => {
		dispatch(themeActions.toggleTheme());
	};

	return {
		currentTheme,
		toggleTheme,
	};
};
