import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
	it('should render the project title', () => {
		render(<Header />);

		const titleElement = screen.getByText(/react music player/i);

		expect(titleElement).toBeInTheDocument();
	});
});
