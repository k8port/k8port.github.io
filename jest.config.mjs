const config = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/app'],
    testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: {
                    jsx: 'react-jsx',
                },
            },
        ],
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|avif)$': '<rootDir>/__mocks__/fileMock.js',
        '^next/font/(.*)$': '<rootDir>/__mocks__/nextFontMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    clearMocks: true,
    collectCoverageFrom: ['app/**/*.{ts,tsx}', '!app/**/*.d.ts', '!app/**/__tests__/**'],
};

export default config;
