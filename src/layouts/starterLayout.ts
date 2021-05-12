import { ILayout } from "../types";
import { colourThemes } from "./colours";
import { gString } from "./utils";

export const starterLayout: ILayout = {
  name: "Starter",
  properties: [
    {
      name: "Theme",
      type: "select",
      options: ["Light", "Dark"],
    },
    {
      name: "Name",
      type: "text",
      default: "Cool Starter",
      placeholder: "Starter title",
    },
    { name: "URL", type: "text", placeholder: "GitHub repo URL" },
  ],
  getCSS: c => {
    const theme = gString(c, "Theme", "light");
    const colours = colourThemes[theme.toLowerCase()];

    return `
  .top {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

   .spacer {
      margin: 150px;
    }

    pre {
      font-size: 50px;
      text-align: left;
    }

    .rlogo {
      width: 200px;
      height: 200px;
      position: absolute;
      top: 60px;
      left: 60px;
    }

    .content {
      padding-right: 80px;
    }

    h1 {
      text-align: right;
      font-size: 150px;
      font-weight: 800;
      max-width: 1600px;
    }

    .dicon-wrapper {
      display: flex;
      justify-content: flex-end;
    }

    .dicon {
      margin-left: auto;
      width: 300px;
      height: 300px;
      border-radius: 2px;
      margin-bottom: 20px;
    }

    .em {
      color: ${colours.pink};
    }
  `;
  },
  getBody: c => {
    const rlogo =
      c.theme === "dark"
        ? "https://railway.app/brand/logo-light.svg"
        : "https://railway.app/brand/logo-dark.svg";

    const name = gString(c, "Name");
    const dicon =
      name != null
        ? `<div class="dicon-wrapper">
             <img class="dicon" src="https://devicons-production.up.railway.app/${name}" />
           </div>`
        : "";

    return `
    <div class="top">
      <img src="${rlogo}" class="rlogo" />

      <div class="content">
        ${dicon}
        <h1>Deploy <span class="em">${name}</span> on Railway</h1>
      </div>
    </div>
  `;
  },
};
