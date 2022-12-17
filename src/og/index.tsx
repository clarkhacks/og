import { ILayout, ILayoutConfig } from "../layouts/types";
import satori from "satori";
import { Resvg, ResvgRenderOptions } from "@resvg/resvg-js";
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

const resvgOpts: ResvgRenderOptions = {
  fitTo: {
    mode: "width",
    value: OG_WIDTH,
  },
  shapeRendering: 2,
  textRendering: 2,
  imageRendering: 0,
};

export const renderSVGToPNG = async (svg: string) => {
  const resvg = new Resvg(svg, resvgOpts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return pngBuffer;
};
