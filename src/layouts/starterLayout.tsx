import React from "react";
import { z } from "zod";
import { ILayout } from "./types";
import { GradientBackground, RLogo } from "./utils";

const starterLayoutConfig = z.object({
  Name: z.string().default(""),
  URL: z.string().nullish(),
  Icon: z.enum(["Show", "Hide"]).default("Show"),
});

export type BlogLayoutConfig = z.infer<typeof starterLayoutConfig>;

const Component: React.FC<{ config: BlogLayoutConfig }> = ({ config }) => {
  const iconName = config.Name.trim() === "" ? "Railway" : config.Name;
  const iconURL = `https://devicons.railway.app/${iconName}?variant=light`;
  const hideIcon = config.Icon === "Hide";

  return (
    <div tw="relative flex justify-start items-end w-full h-full text-white">
      {/* gradient layers */}
      <GradientBackground />

      {/* main text */}
      <div
        tw="flex flex-col text-left font-bold"
        style={{ maxWidth: 800, marginLeft: 96, marginBottom: 80 }}
      >
        {!hideIcon && (
          <img tw="mb-10" style={{ width: 108, height: 108 }} src={iconURL} />
        )}

        <p tw="flex flex-wrap text-7xl" style={{ lineHeight: 1.5 }}>
          Deploy{" "}
          <span tw="mx-3" style={{ color: "#C049FF" }}>
            {config.Name}
          </span>
          <br />
          on Railway
        </p>
      </div>

      {config.URL && (
        <div tw="absolute right-20 bottom-8 text-lg opacity-40">
          {config.URL}
        </div>
      )}

      {/* railway logo */}
      <RLogo
        tw="absolute"
        style={{ top: 66, right: 96, width: 60, height: 60 }}
      />
    </div>
  );
};

export const starterLayout: ILayout<typeof starterLayoutConfig> = {
  name: "starter",
  config: starterLayoutConfig,
  properties: [
    {
      name: "Name",
      type: "text",
      default: "BlitzJS",
      placeholder: "Starter title",
    },
    {
      name: "URL",
      type: "text",
      placeholder: "github.com/railwayapp/starters",
    },
    {
      name: "Icon",
      type: "select",
      options: ["Show", "Hide"],
      default: "Show",
    },
  ],
  Component,
};
