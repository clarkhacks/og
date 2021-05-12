import { ILayout } from "../types";
import { Emoji, emojify, gString, Markdown } from "./utils";

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  getCSS: () => `
    body {
      font-size: 200px;
    }
  `,
  Component: ({ config }) => (
    <Markdown className="header">{gString(config, "Text")}</Markdown>
  ),
};
