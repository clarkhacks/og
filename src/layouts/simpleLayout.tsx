import React from "react";
import { z } from "zod";
import { ILayout } from "./types";

const simpleLayoutConfig = z.object({
  text: z.string(),
});
export type SimpleLayoutConfig = z.infer<typeof simpleLayoutConfig>;

const Component: React.FC<{ config: SimpleLayoutConfig }> = ({ config }) => {
  return (
    <div
      tw="flex items-center justify-center text-center px-4 w-full h-full text-[200px] text-white font-bold"
      style={{
        background: "linear-gradient(to bottom right, tomato, deeppink)",
      }}
    >
      {config.text}
    </div>
  );
};

export const simpleLayout: ILayout<typeof simpleLayoutConfig> = {
  name: "simple",
  config: simpleLayoutConfig,
  properties: [
    {
      type: "text",
      name: "text",
      default: "Hello, world!",
      placeholder: "Text to display",
    },
  ],
  Component,
};
