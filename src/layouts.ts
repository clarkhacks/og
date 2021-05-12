import { ILayout, ILayoutConfig } from "./types";

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [
    { name: "Test", type: "text" },
    {
      name: "Boop",
      description: "This is a test",
      type: "select",
      options: ["one", "two", "three"],
    },
  ],
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
