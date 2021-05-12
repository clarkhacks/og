import { colourThemes, layouts } from "../../../layouts";
import { IConfig, ILayoutConfig, Theme } from "../../../types";
import { sanitizeHtml } from "./sanitizer";

const getCommonCSS = (theme: Theme) => {
  const colours = colourThemes[theme ?? "light"];

  return `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

    body {
        background: ${colours.bg};
        color: ${colours.fg};
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
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

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }
    
    .heading {
        font-family: 'Inter', sans-serif;
        font-size: 100px;
        font-style: normal;
        color: ${colours.fg};
        line-height: 1.8;
    }`;
};

export function getHtml(config: IConfig, layoutConfig: ILayoutConfig) {
  //   const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
  const layout = layouts.find(l => l.name === config.layoutName);

  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCommonCSS(config.theme)}
        ${layout?.getCSS != null ? layout.getCSS(layoutConfig) : ""}
    </style>
    <body>
        ${
          layout?.getBody != null
            ? layout.getBody(layoutConfig)
            : `<h1 style="font-size: 100px">${config.layoutName} layout not implemented</h1>`
        }
    </body>
</html>`;

  /*
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
        <div>
            <div class="spacer">
            <div class="logo-wrapper">
                ${images
                  .map(
                    (img, i) =>
                      getPlusSign(i) + getImage(img, widths[i], heights[i]),
                  )
                  .join("")}
            </div>
            <div class="spacer">
            <div class="heading">${emojify(
              md ? marked(text) : sanitizeHtml(text),
            )}
            </div>
        </div>
    </body>
</html>`;
*/
}

function getImage(src: string, width = "auto", height = "225") {
  return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`;
}

function getPlusSign(i: number) {
  return i === 0 ? "" : '<div class="plus">+</div>';
}
