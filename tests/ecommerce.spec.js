const { test, expect } = require('@playwright/test');

test.use({ baseURL: undefined });

test('E-commerce flow: Sign in, Select iPhone X, Add to Cart, and Checkout', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { waitUntil: 'domcontentloaded' });
  
  // Wait for page to be interactive
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  
  // Look for login form elements
  await expect(page.locator('input[name="username"]')).toBeVisible({ timeout: 10000 }).catch(async () => {
    // If username field not found, try email
    await expect(page.locator('input[type="email"]')).toBeVisible({ timeout: 5000 });
  });
  
  // Fill in credentials - trying different selectors
  const emailInput = page.locator('input[name="username"]').or(page.locator('input[type="email"]'));
  await emailInput.fill('rahulshettyacademy', { timeout: 5000 });
  
  // Fill in password
  const passwordInput = page.locator('input[name="password"]').or(page.locator('input[type="password"]'));
  await passwordInput.fill('Learning@830$3mK2', { timeout: 5000 });
  
  // Click the sign-in button
  const signInBtn = page.locator('input[type="submit"]').or(page.locator('button:has-text("Sign in")')).first();
  await signInBtn.click({ timeout: 5000 });
  
  // Wait for navigation to products page
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  
  // Wait for products section to appear
  await page.waitForSelector('text=iPhone X', { timeout: 15000 });
  
  // Find iPhone X product card and add to cart
  const iPhoneXCard = page.locator(':has-text("iPhone X")').first();
  await iPhoneXCard.scrollIntoViewIfNeeded();
  
  // Find "Add to cart" button related to iPhone X
  const addToCartBtn = iPhoneXCard.locator('button:has-text("Add to cart")').or(page.locator('button').filter({ hasText: 'Add' }).first());
  await addToCartBtn.click({ timeout: 5000 });
  
  // Wait for cart update
  await page.waitForTimeout(1500);
  
  // Navigate to checkout/cart
  const checkoutBtn = page.locator('text=Checkout').or(page.locator('a:has-text("Checkout")')).first();
  await checkoutBtn.click({ timeout: 5000 });
  
  // Wait for checkout page
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  
  // Verify we're on checkout page and iPhone X is there
  await expect(page.locator('text=iPhone X')).toBeVisible({ timeout: 10000 });
  
  // Log success
  console.log('✅ iPhone X successfully added to cart and checkout confirmed!');
});
