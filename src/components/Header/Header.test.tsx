import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
	it('should render the project title', () => {
		// 1. Рендерим компонент в виртуальном окружении
		render(<Header />);

		// 2. Ищем на "экране" элемент с текстом "React Music Player" (без учета регистра)
		const titleElement = screen.getByText(/react music player/i);

		// 3. Ожидаем, что такой элемент существует в документе
		expect(titleElement).toBeInTheDocument();
	});
});
