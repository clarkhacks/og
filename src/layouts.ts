import { ILayout } from "./types";

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
    { name: "Name", type: "text" },
    { name: "Icon", type: "text" },
    { name: "URL", type: "text" },
  ],
};

export const layouts: ILayout[] = [simpleLayout, starterLayout];
