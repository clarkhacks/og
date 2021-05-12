import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { colourThemes } from "./colours";
import { gString } from "./utils";

const defaultTheme = "dark";

const getCSS: GetCSSFn = config => {
  const theme = gString(config, "Theme", defaultTheme).toLowerCase();
  const colours = colourThemes[theme];

  return `
  .top {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: ${colours.bg};
    color: ${colours.fg};
    padding: 80px;
  }

    .rlogo {
      width: 200px;
      height: 200px;
      position: absolute;
      top: 60px;
      left: 60px;
    }

    .content {
      padding-right: 80px;
    }

    h1 {
      margin: 0;
      text-align: right;
      font-size: 1.5em;
      font-weight: 800;
      max-width: 1600px;
    }

    .dicon-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 80px;
    }

    .dicon {
      width: 300px;
      height: 300px;
      border-radius: 2px;
    }

    .em {
      color: ${colours.pink};
    }
    `;
};

const Component: LayoutComponent = ({ config }) => {
  const theme = gString(config, "Theme", defaultTheme).toLowerCase();
  const rlogo =
    theme === "dark"
      ? "https://railway.app/brand/logo-light.svg"
      : "https://railway.app/brand/logo-dark.svg";

  const name = gString(config, "Name");

  return (
    <div className="top">
      <img src={rlogo} className="rlogo" />

      <div className="content">
        <div className="dicon-wrapper">
          <img
            className="dicon"
            src={`https://devicons-production.up.railway.app/${name}`}
          />
        </div>

        <h1>
          Deploy <span className="em">{name}</span> on Railway
        </h1>
      </div>
    </div>
  );
};

export const starterLayout: ILayout = {
  name: "Starter",
  properties: [
    {
      name: "Theme",
      type: "select",
      options: ["Light", "Dark"],
      default: defaultTheme,
    },
    {
      name: "Name",
      type: "text",
      default: "Cool Starter",
      placeholder: "Starter title",
    },
    { name: "URL", type: "text", placeholder: "GitHub repo URL" },
  ],
  getCSS,
  Component,
};
