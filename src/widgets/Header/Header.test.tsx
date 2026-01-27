import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Header } from './Header';
import { renderWithProviders } from '@/shared/lib/tests/renderWithProviders/renderWithProviders';

describe('Header component', () => {
	it('should render the project title', () => {
		renderWithProviders(<Header />);

		const titleElement = screen.getByText(/react music player/i);

		expect(titleElement).toBeInTheDocument();
	});
});
