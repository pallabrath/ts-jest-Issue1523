module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "app/plugins/sdk" : "<rootDir>/node_modules/grafana-sdk-mocks/app/sdk.ts",
  }
};
