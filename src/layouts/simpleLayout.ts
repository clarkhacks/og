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
  getBody: c => `
    <div class="top">
      <div class="emoji">${emojify("✨")}</div>
      <div class="header">${gString(c, "Test")}</div>
      <div class="emoji">${emojify("✨")}</div>
    </div>
  `,
};
