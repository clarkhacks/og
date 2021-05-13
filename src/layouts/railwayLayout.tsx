import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { defaultTheme, colourThemes } from "./colours";
import { gString, Markdown, RLogo } from "./utils";

const getCSS: GetCSSFn = config => {
  const theme = gString(config, "Theme", defaultTheme).toLowerCase();
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
  const title = gString(config, "Title");
  const subTitle = gString(config, "Sub Title");

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
      name: "Title",
      type: "text",
      default: "Build Apps <br /> Not Infrastructure",
    },
    {
      name: "Sub Title",
      type: "text",
      default: "Welcome to the Anywhere Cloud",
    },
  ],
  getCSS,
  Component,
};
