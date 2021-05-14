import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { Markdown } from "./utils";

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
  return <Markdown className="header">{config.Text}</Markdown>;
};

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  getCSS,
  Component,
};
