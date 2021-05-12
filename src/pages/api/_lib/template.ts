import { layouts } from "../../../layouts";
import { IConfig, ILayoutConfig } from "../../../types";
import { sanitizeHtml } from "./sanitizer";

const getCommonCSS = () => {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    body {
        background: white;
        color: black;
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }
`;
};

export function getHtml(config: IConfig, layoutConfig: ILayoutConfig) {
  //   const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
  const layout = layouts.find(l => l.name === config.layoutName);

  const c = { ...config, ...layoutConfig };

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCommonCSS()}
        ${layout?.getCSS != null ? layout.getCSS(c) : ""}
    </style>
    <body>
        ${
          layout?.getBody != null
            ? layout.getBody(c)
            : `<h1 style="font-size: 100px">${config.layoutName} layout not implemented</h1>`
        }
    </body>
</html>`;
}
