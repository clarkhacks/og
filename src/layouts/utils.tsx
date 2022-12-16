import { ILayoutConfig } from "./types";
import marked from "marked";
import React from "react";

export const mdToHTML = (text: string): string => marked(text);

export const Markdown: React.FC<{
  children: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, style, ...props }) => (
  <div
    className={`markdown ${props.className}`}
    dangerouslySetInnerHTML={{ __html: mdToHTML(sanitizeHtml(children)) }}
    style={style}
  />
);

const entityMap: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

export function sanitizeHtml(html: string) {
  return String(html)
    .replace(/[&<>"'\/]/g, key => entityMap[key])
    .replace("\\n", "<br />");
}

export const RLogo: React.FC<{
  theme?: "light" | "dark";
  style?: React.CSSProperties;
}> = ({ theme = "dark", style, ...props }) => {
  const rlogo =
    theme === "dark"
      ? "https://railway.app/brand/logo-light.svg"
      : "https://railway.app/brand/logo-dark.svg";

  return (
    <img
      src={rlogo}
      className="rlogo"
      style={{ width: 96, height: 96, ...style }}
      {...props}
    />
  );
};
