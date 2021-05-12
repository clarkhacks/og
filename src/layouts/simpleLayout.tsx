import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { gString, Markdown } from "./utils";

const getCSS: GetCSSFn = config => {
  return `
    body {
      font-size: 200px;
      color: white;
      background: linear-gradient(to bottom right, tomato, deeppink);
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const text = gString(config, "Text");
  return <Markdown className="header">{text}</Markdown>;
};

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  getCSS,
  Component,
};
