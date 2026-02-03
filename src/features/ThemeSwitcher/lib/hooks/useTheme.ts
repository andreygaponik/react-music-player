import { themeActions } from '../../model/themeSlice';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';

export const useTheme = () => {
	const dispatch = useAppDispatch();
	const currentTheme = useAppSelector(state => state.theme.mode);

	const toggleTheme = () => dispatch(themeActions.toggleTheme());

	return {
		currentTheme,
		toggleTheme,
	};
};
