# Railway OG Image Generator

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fog-generator)

Service that dynamically generates [Open Graph](https://ogp.me/) images for [Railway starters](https://railway.app/starters) that looks something like

<img width="600" src="https://og.railway.app/api/image?fileType=png&layoutName=Starter&Theme=Dark&Name=BlitzJS" />

# ✨ How To Use

Use the generated image URL in the `<head>` of your HTML document as the og:image meta property

```html
  <meta property="og:image" content="https://og.railway.app/api/image?fileType=png&layoutName=Simple&Text=**Hello**+_World_" />
```

Whenever this image is requested (e.g. in link previews) the image will be generated on demand.

# 🧐 How It Works

Images are generated through the `/api/image` route. When you hit this route the following happens
- Query params are parsed
- Layout is looked up in list of layouts using the `layoutName` query param
- `layout.getCSS` called with all query params
- `layout.Component` is rendered with all query params as `config` prop
- HTML page built, rendered with Puppeteer, and screenshot
- Screenshot returned with a long cache max age

## Layouts

This service can generate images using multiple _layouts_. A layout is defined as a
- Collection of properties that are user configurable. The UI for these properties is auto genearted
- Function that takes in layout config and returns CSS needed to render
- A React component that takes in layout config as a prop

For example, the "Simple" layout on [og.railway.app](https://og.railway.app) is defined as

```tsx
import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { gString, Markdown } from "./utils";

const getCSS: GetCSSFn = config => {
  return `
    body {
      font-size: 200px;
      color: white;
      background: linear-gradient(to bottom right, tomato, deeppink);
    }
  `;
};

const Component: LayoutComponent = ({ config }) => {
  const text = gString(config, "Text");
  return <h1>{text}</h1>;
};

export const simpleLayout: ILayout = {
  name: "Simple",
  properties: [{ name: "Text", type: "text", default: "**Hello** _World_" }],
  getCSS,
  Component,
};
```

This will render as

![image](https://user-images.githubusercontent.com/3044853/118061050-0868c300-b349-11eb-8ac1-0b0af7d0dc9a.png)

# 🚀 Development

You can fork this repo or [deploy to Railway](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fog-generator) to make it your own, customize, and use in your own projects.

The frontend is a [NextJS](https://nextjs.org) site and the image generation happens in an API route.

```
# Start local development server
yarn dev

# Build for production
yarn build

# Start in production
yarn start
```

# 🙌 Acknowledgement

Credit where credit is due. This started as a forked repo from [Vercel's OG image generator](https://github.com/vercel/og-image). The main differences are

- Multiple configurable layouts
- Content of image written in JSX (as opposed to a template string)
- Headless Chrome configuration modified to deploy on Railway

