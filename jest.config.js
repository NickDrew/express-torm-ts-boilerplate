/* eslint-disable max-len */
module.exports = {
    collectCoverageFrom: ['src/**/*.{js,ts}', '!src/**/*.test.{js,ts}', '!dist'],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 91,
            functions: 98,
            lines: 98,
        },
    },
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
