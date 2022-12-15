import React from "react";
import { ILayout } from "./types";

export interface SimpleLayoutConfig {
  text: string;
}

const Component: React.FC<{ config: SimpleLayoutConfig }> = ({ config }) => {
  return (
    <div
      tw="flex items-center justify-center w-full h-full text-9xl text-white font-bold"
      style={{
        background: "linear-gradient(to bottom right, tomato, deeppink)",
      }}
    >
      {config.text}
    </div>
  );
};

export const simpleLayout: ILayout<SimpleLayoutConfig> = {
  name: "simple",
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
