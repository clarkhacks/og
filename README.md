# Railway OG Image Generator

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/xWRIhd)

Service that dynamically generates [Open Graph](https://ogp.me/) images for [Railway starters](https://railway.app/starters) that looks something like

<img width="600" src="https://og.railway.app/api/image?fileType=svg&layoutName=docs&Page=Open+Graph+Generator" />

# ✨ How To Use

Use the generated image URL in the `<head>` of your HTML document as the og:image meta property

```html


<meta
  property="og:image"
  content="https://og.railway.app/api/image?fileType=png&layoutName=Simple&Text=Hello+World"
/>
```

Whenever this image is requested (e.g. in link previews) the image will be generated on demand.

# 🧐 How It Works

Images are generated through the `/api/image` route. When you hit this route the following happens

- Query params are parsed
- Layout is looked up in list of layouts using the `layoutName` query param
- `layout.Component` is rendered with all query params as `config` prop
- SVG is created from the component using [Satori](https://github.com/vercel/satori#jsx)
- Optionally, a PNG is created from the SVG with [resvg-js](https://github.com/yisibl/resvg-js)

## Layouts

This service can generate images using multiple _layouts_. A layout is defined as a

- Collection of properties that are user configurable. The UI for these properties is auto genearted
- Function that takes in layout config and returns CSS needed to render
- A React component that takes in layout config as a prop

For example, the "Simple" layout on [og.railway.app](https://og.railway.app) is defined as

```tsx
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
      tw="flex items-center justify-center text-center px-4 w-full h-full text-8xl text-white font-bold"
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
```

This will render as

<img width="600" src="https://user-images.githubusercontent.com/3044853/208225044-e6c4e496-039a-45bc-a310-834e041afdd0.png" />

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
