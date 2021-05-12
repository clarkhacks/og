import twemoji from "twemoji";
import marked from "marked";
import { ILayoutConfig } from "../types";

const twOptions = { folder: "svg", ext: ".svg" };
export const emojify = (text: string): string => twemoji.parse(text, twOptions);

export const mdToHTML = (text: string): string => marked(text);

export const gString = (
  layoutConfig: ILayoutConfig,
  name: string,
  defaultValue?: string,
): string => {
  const value = layoutConfig[name] ?? defaultValue;
  return Array.isArray(value) ? value.join(", ") : value;
};
