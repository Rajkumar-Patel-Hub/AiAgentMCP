# AIAgentMCP - Playwright Testing Framework

A comprehensive JavaScript Playwright testing framework for automated browser testing and web automation.

## Project Structure

```
.
├── .github/
│   └── copilot-instructions.md
├── tests/
│   ├── example.spec.js
│   └── README.md
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Install dependencies:
```bash
npm install
```

This will install Playwright and the @playwright/test package.

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run tests with browser visible (headed mode)
npm run test:headed

# View test report
npm run test:report
```

### Run Tests on Specific Browsers

```bash
# Chrome/Chromium
npm run test:chrome

# Firefox
npm run test:firefox

# Safari/WebKit
npm run test:webkit
```

## Configuration

The test configuration is defined in `playwright.config.js`. You can customize:

- **testDir**: Directory containing test files (default: `./tests`)
- **baseURL**: Base URL for navigation in tests
- **timeout**: Timeout for individual tests
- **retries**: Number of retries on failure
- **projects**: Browser projects (Chromium, Firefox, WebKit, Mobile)
- **reporter**: Test reporter (HTML report generated in `playwright-report/`)

## Test Files

Test files should be placed in the `tests/` directory and follow the naming pattern:
- `*.spec.js` or `*.test.js`

Example test file structure:

```javascript
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toContain('Example');
});
```

## Writing Tests

### Basic Test Structure

```javascript
const { test, expect } = require('@playwright/test');

test('description of test', async ({ page, context, browser }) => {
  // Navigate to page
  await page.goto('/');
  
  // Interact with elements
  await page.click('selector');
  await page.fill('input[type="text"]', 'text value');
  
  // Assert expectations
  expect(await page.textContent('h1')).toContain('Title');
});
```

### Common Methods

- `page.goto(url)` - Navigate to URL
- `page.click(selector)` - Click element
- `page.fill(selector, text)` - Fill input field
- `page.locator(selector)` - Get element locator
- `page.waitForNavigation()` - Wait for page navigation
- `expect(value).toBe()` - Assert equality
- `expect(locator).toBeVisible()` - Assert visibility

For more information, see the [Playwright Documentation](https://playwright.dev/)

## Test Reports

After running tests, view the HTML report:

```bash
npm run test:report
```

This opens the Playwright Report viewer with detailed test results, logs, and traces.

## Debugging Tests

### Debug Mode
```bash
npm run test:debug
```

This launches the Playwright Inspector for step-by-step debugging.

### Headed Mode
```bash
npm run test:headed
```

Run tests with the browser window visible for visual debugging.

### Screenshots and Traces

Tests automatically capture traces on first retry. Configure in `playwright.config.js`:

```javascript
use: {
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
}
```

## Continuous Integration

For CI/CD pipelines, set the `CI` environment variable:

```bash
CI=true npm test
```

This enables:
- Automatic retries (2 times)
- Serial test execution
- Failure reporting

## Troubleshooting

### Tests fail on first run
- Ensure all dependencies are installed: `npm install`
- Check that `baseURL` in config matches your test environment

### Chromium not found
- Playwright may need to install browsers: `npx playwright install`

### Port already in use
- If using `webServer` in config, ensure the port is available

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Guide](https://playwright.dev/docs/debug)

## License

MIT
