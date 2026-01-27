import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
	return (
		<header>
			<h1>React Music Player</h1>
			<ThemeSwitcher />
		</header>
	);
};
