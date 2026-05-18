# Playwright Tests Directory

This directory contains all Playwright test files. Test files should follow the naming pattern: `*.spec.js` or `*.test.js`

## Running Tests

```bash
# Run all tests
npm test

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests in headed mode (browser visible)
npm run test:headed

# Run tests for specific browser
npm run test:chrome
npm run test:firefox
npm run test:webkit

# View test report
npm run test:report
```

## Test Structure

```
tests/
├── example.spec.js
└── README.md
```

## Adding New Tests

Create new test files in this directory with the `.spec.js` extension. Example:

```javascript
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  // Add your test assertions here
});
```
