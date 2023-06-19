module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
