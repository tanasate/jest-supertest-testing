module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/__tests__'],
    testMatch: ['**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    moduleFileExtensions: ['ts', 'js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
