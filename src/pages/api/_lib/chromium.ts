import core from "puppeteer-core";
import { OG_HEIGHT, OG_WIDTH } from "../../../constants";
import { FileType } from "../../../types";
import { getOptions } from "./options";

// test
async function getPage(isDev: boolean) {
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  return await browser.newPage();
}

export async function getScreenshot(
  html: string,
  type: FileType,
  isDev: boolean,
) {
  const page = await getPage(isDev);
  await page.setViewport({ width: OG_WIDTH, height: OG_HEIGHT });
  await page.setContent(html);
  const file = await page.screenshot({ type });
  return file;
}
