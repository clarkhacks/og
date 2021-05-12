import { Colours, ILayout, ILayoutConfig, Theme } from "./types";
import twemoji from "twemoji";
import marked from "marked";

const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

export const colourThemes: Record<Theme, Colours> = {
  light: {
    fg: "black",
    bg: "white",
    gray: "dimgray",
  },
  dark: {
    fg: "white",
    bg: "black",
    gray: "dimgray",
  },
};

const gString = (layoutConfig: ILayoutConfig, name: string): string => {
  const value = layoutConfig[name];
  return Array.isArray(value) ? value.join(", ") : marked(value);
};

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Test", type: "text", default: "**Hello** _World_" }],
  getCSS: () => `
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .emoji {
      font-size: 100px; 
      margin: 0 80px;
    }

    .header { 
      font-size: 100px; 
    }
  `,
  getBody: c => `
    <div>
      <div class="emoji">${emojify("✨")}</div>
      <div class="header">${gString(c, "Test")}</div>
      <div class="emoji">${emojify("✨")}</div>
    </div>
  `,
};

export const starterLayout: ILayout = {
  name: "Starter",
  properties: [
    {
      name: "Name",
      type: "text",
      default: "Cool Starter",
      placeholder: "Starter title",
    },
    {
      name: "Icon",
      type: "text",
      default: "https://devicons-production.up.railway.app/javascript",
    },
    { name: "URL", type: "text", placeholder: "GitHub repo URL" },
  ],
};

export const layouts: ILayout[] = [simpleLayout, starterLayout];

export const getDefaultLayout = (layout: ILayout): ILayoutConfig => {
  const config: ILayoutConfig = {};

  for (const p of layout.properties) {
    if (p.default != null) {
      config[p.name] = p.default;
    }
  }

  return config;
};

export const getLayoutConfigFromQuery = (
  layoutName: string,
  query: Record<string, string | string[]>,
): ILayoutConfig => {
  const layout = layouts.find(l => l.name === layoutName);

  if (layout == null) {
    return {};
  }

  const config: ILayoutConfig = getDefaultLayout(layout);
  for (const p of layout.properties) {
    if (query[p.name] != null) {
      config[p.name] = query[p.name];
    }
  }

  return config;
};
