import { ILayout } from "../types";
import { gString, Markdown } from "./utils";

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  getCSS: () => {
    return `
    body {
      font-size: 200px;
      color: white;
      background: linear-gradient(to bottom right, tomato, deeppink);
    }
  `;
  },
  Component: ({ config }) => (
    <Markdown className="header">{gString(config, "Text")}</Markdown>
  ),
};
