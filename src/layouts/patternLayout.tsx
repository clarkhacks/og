import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { topography } from "./patterns/topography";
import { jigsaw } from "./patterns/jigsaw";
import { texture } from "./patterns/texture";
import { architect } from "./patterns/architect";
import { graph } from "./patterns/graph";
import { Pattern } from "./patterns/types";
import { Markdown } from "./utils";

const getCSS: GetCSSFn = config => {
  return `
    body {}
  `;
};

const patterns = {
  topography,
  jigsaw,
  texture,
  architect,
  "graph paper": graph,
};

const Component: LayoutComponent = ({ config }) => {
  const pattern = patterns[config.Pattern] as Pattern;
  const text = config.Text;
  const textColor = config["Text Color"];
  const fg = config.Foreground;
  const bg = config.Background;
  const opacity = config.Opacity ?? "0.5";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100vw",
        height: "100vh",
        padding: 80,
        margin: 0,
        backgroundColor: bg,
        backgroundImage: pattern(fg, opacity),
      }}
    >
      <Markdown
        style={{
          fontSize: 200,
          fontWeight: 800,
          lineHeight: "1em",
          color: textColor,
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};

export const patternLayout: ILayout = {
  name: "Pattern",
  properties: [
    {
      name: "Pattern",
      type: "select",
      default: "topography",
      options: Object.keys(patterns),
      description: "from heropatterns.com",
    },
    {
      name: "Text",
      type: "text",
      default: "Hello World",
      placeholder: "Some text to display",
    },
    {
      name: "Text Color",
      type: "color",
      default: "white",
    },
    {
      name: "Foreground",
      type: "color",
      default: "#d345e5",
    },
    {
      name: "Background",
      type: "color",
      default: "#4317d3",
    },
    {
      name: "Opacity",
      type: "number",
      default: "0.5",
    },
  ],
  getCSS,
  Component,
};
