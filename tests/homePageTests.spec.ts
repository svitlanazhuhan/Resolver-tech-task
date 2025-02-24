import { test, expect } from '@playwright/test'
import { getCellValue } from './tableHelpers';

test.beforeEach(async({page}) => {
  try {
    await page.goto('/QE-index.html')
    await page.waitForSelector('.navbar-brand', { state: 'visible', timeout: 10000 })

    const pageTitle = page.locator('.navbar-brand')
    await expect(pageTitle).toHaveText('Test Page')

  } catch (error) {
    console.error('Error loading the page or finding the selector:', error)
    throw error
  }
})


test('Test 1 Complete sign in form', async ({ page }) => { 
  const signinForm = page.locator('.form-signin')
  const emailInput = signinForm.getByRole('textbox', { name: 'Email address' })
  const passwordInput = signinForm.getByRole('textbox', { name: 'Password' })
  const signinButton = signinForm.getByRole('button', { name: 'Sign in'})

  await expect(emailInput).toBeVisible()
  await expect(passwordInput).toBeVisible()
  await expect(signinButton).toBeVisible()

  await emailInput.fill('test@test.com')
  await passwordInput.fill('Password1')
  await expect(emailInput).toHaveValue('test@test.com')
  await expect(passwordInput).toHaveValue('Password1')
});

test('Test 2 Check list group', async ({ page }) => {
  const test2Div = page.locator('#test-2-div')
  const listItems = test2Div.locator('.list-group-item')
  await expect(listItems).toHaveCount(3)

  const secondListItem = listItems.nth(1)
  await expect(secondListItem).toContainText('List Item 2')

  const secondBadge = secondListItem.locator('.badge')
  await expect(secondBadge).toHaveText('6')
});

test('Test 3 Select dropdown option', async ({ page }) => {
  const test3Div = page.locator('#test-3-div')
  const dropdownButton = test3Div.locator('#dropdownMenuButton')
  await expect(dropdownButton).toHaveText(' Option 1 ')
  await dropdownButton.click()
  await test3Div.getByText('Option 3').click()
  await expect(dropdownButton).toHaveText('Option 3')
});

test('Test 4 Check button states', async ({ page }) => {
  const test4Div = page.locator('#test-4-div')
  const primaryButton = test4Div.locator('button.btn-primary')
  const secondaryButton = test4Div.locator('button.btn-secondary')
  await expect(primaryButton).toBeEnabled()
  await expect(secondaryButton).toBeDisabled()
});

test('Test 5 Check button interaction', async ({ page }) => {
  const test5Div = page.locator('#test-5-div')
  const interactiveButton = test5Div.locator('#test5-button')
  await interactiveButton.waitFor({state: 'visible'})

  await interactiveButton.click()

  const successMessage = test5Div.getByText('You clicked a button!')
  await expect(successMessage).toBeVisible()
  await expect(interactiveButton).toBeDisabled()
});

test('Test 6 Check table cell value', async ({ page }) => {
  const test6Div = page.locator('#test-6-div')
  const cellValue = await getCellValue(test6Div, 2, 2)
  await expect(cellValue).toHaveText('Ventosanzap')
});