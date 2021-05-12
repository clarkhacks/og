import { ILayout } from "../types";
import { emojify, gString } from "./utils";

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Test", type: "text", default: "**Hello** _World_" }],
  getCSS: () => `
    .top {
      width: 100%;
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
    }

    .emoji {
      font-size: 100px; 
      margin: 0 80px;
    }

    .header { 
      font-size: 100px; 
    }
  `,
  Component: ({ config }) => (
    <div className="top">
      <div className="emoji">${emojify("✨")}</div>
      <div className="header">${gString(config, "Test")}</div>
      <div className="emoji">${emojify("✨")}</div>
    </div>
  ),
};
