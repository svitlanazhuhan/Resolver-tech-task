import { Locator } from "@playwright/test";

export async function getCellValue(sectionLocator: Locator, rowIndex: number, colIndex: number) {
  return sectionLocator.locator('table tbody tr').nth(rowIndex).locator('td').nth(colIndex)
}