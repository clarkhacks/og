import twemoji from "twemoji";
import marked from "marked";
import { ILayoutConfig } from "../types";
import React from "react";

export const emojify = (text: string): string =>
  twemoji.parse(text, {
    ext: ".svg",
  });

export const mdToHTML = (text: string): string => marked(text);

export const gString = (
  layoutConfig: ILayoutConfig,
  name: string,
  defaultValue?: string,
): string => {
  const value = layoutConfig[name] ?? defaultValue;
  return Array.isArray(value) ? value.join(", ") : value;
};

export const Emoji: React.FC<{ children: string; className?: string }> = ({
  children,
  ...props
}) => (
  <div
    className={`emoji ${props.className}`}
    dangerouslySetInnerHTML={{ __html: emojify(children) }}
  />
);

export const Markdown: React.FC<{ children: string; className?: string }> = ({
  children,
  ...props
}) => (
  <div
    className={`markdown ${props.className}`}
    dangerouslySetInnerHTML={{ __html: mdToHTML(children) }}
  />
);
