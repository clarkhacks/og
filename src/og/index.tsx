import { ILayout, ILayoutConfig } from "../layouts/types";
import satori from "satori";
import fs from "fs";
import { SatoriOptions } from "satori";
import { OG_HEIGHT, OG_WIDTH } from "../constants";

const fonts: SatoriOptions["fonts"] = [
  {
    name: "Inter",
    style: "normal",
    weight: 400,
    data: fs.readFileSync("public/fonts/Inter-Regular.ttf"),
  },
  {
    name: "Inter",
    style: "bold" as any,
    weight: 800,
    data: fs.readFileSync("public/fonts/Inter-Bold.ttf"),
  },
];

export const renderLayoutToSVG = async ({
  layout,
  config,
}: {
  layout: ILayout;
  config: ILayoutConfig;
}) => {
  const Component = layout.Component;

  const svg = await satori(<Component config={config} />, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts,
  });

  return svg;
};
