import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { colourThemes, defaultTheme } from "./colours";
import { getTheme, Markdown, RLogo } from "./utils";

const getCSS: GetCSSFn = config => {
  const theme = getTheme(config);
  const colours = colourThemes[theme];

  return `
    body {
      color: ${colours.fg};
      background: ${colours.bg};
    }

    h1 {
      margin-top: 120px;
      font-size: 160px;
    }

    h2 {
      margin-top: 120px;
      font-size: 60px;
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const title = config.Title;
  const subTitle = config["Sub Title"];

  const logoSize = !!subTitle ? 150 : 240;

  return (
    <div>
      <RLogo config={config} style={{ width: logoSize, height: logoSize }} />
      <h1>
        <Markdown>{title}</Markdown>
      </h1>

      {subTitle && (
        <h2>
          <Markdown>{subTitle}</Markdown>
        </h2>
      )}
    </div>
  );
};

export const railwayLayout: ILayout = {
  name: "Railway",
  properties: [
    {
      name: "Theme",
      type: "select",
      options: ["Light", "Dark"],
      default: defaultTheme,
    },
    {
      name: "Title",
      type: "text",
      default: "Build Apps \\n Not Infrastructure",
      placeholder: "Big text",
    },
    {
      name: "Sub Title",
      type: "text",
      default: "Welcome to the Anywhere Cloud",
      placeholder: "Smaller text",
    },
  ],
  getCSS,
  Component,
};
