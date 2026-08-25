import { useEffect } from 'react';
import { useWindowSize } from './useWindowSize';

export function useBreakpointDebug() {
    const { width } = useWindowSize();

    useEffect(() => {
        const themeBreakpoints = {
            xs: '(min-width: 480px)',
            sm: '(min-width: 640px)',
            md: '(min-width: 768px)',
            mlg: '(min-width: 900px)',
            lg: '(min-width: 1024px)',
            xl: '(min-width: 1200px)',
            '2xl': '(min-width: 1400px)',
            '3xl': '(min-width: 1600px)',
            '4xl': '(min-width: 1800px)',
            '5xl': '(min-width: 2000px)',
        };

        function getScreenZone() {
            return width < 480
                ? 'xs'
                : width < 640
                  ? 'sm'
                  : width < 768
                    ? 'md'
                    : width < 900
                      ? 'mlg'
                      : width < 1024
                        ? 'lg'
                        : width < 1200
                          ? 'xl'
                          : width < 1400
                            ? '2xl'
                            : width < 1600
                              ? '3xl'
                              : width < 1800
                                ? '4xl'
                                : width < 2000
                                  ? '5xl'
                                  : '6xl';
        }

        const listeners = Object.entries(themeBreakpoints).map(([, query]) => {
            const mediaQuery = window.matchMedia(query);
          let _currentBreakpoint = getScreenZone();
            const handleChange = (event: MediaQueryListEvent) => {
                if (event.matches) {
              _currentBreakpoint = getScreenZone();
                } else {
              _currentBreakpoint = getScreenZone();
                }
            };
            mediaQuery.addEventListener('change', handleChange);

            return () => mediaQuery.removeEventListener('change', handleChange);
        });

        return () => listeners.forEach(remove => remove());
    }, [width]);
}
