import React from "react";
import { z } from "zod";
import { DocsIllustration } from "../components/DocsIllustration";
import { ILayout } from "./types";
import { RLogo } from "./utils";

const docsLayoutConfig = z.object({
  Page: z.string(),
  Url: z.string().nullish(),
});

export type DocsLayoutConfig = z.infer<typeof docsLayoutConfig>;

const Component: React.FC<{ config: DocsLayoutConfig }> = ({ config }) => {
  const url =
    (config.Url ?? "").trim() === ""
      ? "docs.railway.app"
      : (config.Url as string);
  return (
    <div
      tw="relative flex justify-start items-end w-full h-full"
      style={{
        background: `#13111C`,
      }}
    >
      {/* gradient layers */}
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(327.21deg, rgba(33, 0, 75, 0.35) 3.65%, rgba(60, 0, 136, 0) 40.32%)",
        }}
      />
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(245.93deg, rgba(209, 21, 111, 0.26) 0%, rgba(209, 25, 80, 0) 36.63%)",
        }}
      />
      <div
        tw="absolute inset-0"
        style={{
          background:
            "linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.1) 85.72%)",
        }}
      />

      {/* main text */}
      <div
        tw="flex flex-col text-left border"
        style={{ maxWidth: 740, marginLeft: 96, marginBottom: 90 }}
      >
        <p tw="text-8xl text-white font-bold" style={{ lineHeight: 1.2 }}>
          {config.Page}
        </p>
      </div>

      {/* docs link  */}

      <p
        tw="absolute right-10 bottom-4 text-xl"
        style={{ color: "hsl(270, 70%, 65%)" }}
      >
        {url}
      </p>

      {/* railway logo */}
      <RLogo tw="absolute" style={{ top: 106, right: 97 }} />

      {/* illustration */}
      <div tw="absolute top-0 right-0 flex">
        <DocsIllustration />
      </div>
    </div>
  );
};

export const docsLayout: ILayout<typeof docsLayoutConfig> = {
  name: "docs",
  config: docsLayoutConfig,
  properties: [
    {
      type: "text",
      name: "Page",
      default: "Railway Documentation",
      placeholder: "Text to display",
    },
    {
      type: "text",
      name: "Url",
      default: "docs.railway.app",
      placeholder: "Url to display",
    },
  ],
  Component,
};
