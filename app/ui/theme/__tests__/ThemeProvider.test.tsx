import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

function ThemeProbe() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button type="button" onClick={toggleTheme}>
            {theme}
        </button>
    );
}

describe('ThemeProvider', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation((query: string) => ({
                matches: false,
                media: query,
                onchange: null,
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                addListener: jest.fn(),
                removeListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });

        window.localStorage.clear();
        document.documentElement.className = '';
        document.documentElement.style.colorScheme = '';
    });

    it('toggles the dark class and color scheme when the theme changes', async () => {
        render(
            <ThemeProvider>
                <ThemeProbe />
            </ThemeProvider>
        );

        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(document.documentElement.style.colorScheme).toBe('light');

        fireEvent.click(screen.getByRole('button', { name: 'light' }));

        await waitFor(() => {
            expect(document.documentElement.classList.contains('dark')).toBe(true);
        });

        expect(document.documentElement.style.colorScheme).toBe('dark');
        expect(window.localStorage.getItem('theme')).toBe('dark');
    });
});
