import { Page } from "@playwright/test";

export async function getCellValue(page: Page, rowIndex: number, colIndex: number) {
  return page.locator('table tbody tr').nth(rowIndex).locator('td').nth(colIndex);
}