import { NextApiHandler } from "next";
import { getLayoutAndConfig } from "../../layouts";
import { z } from "zod";
import { renderLayoutToSVG } from "../../og";

const imageReq = z.object({
  layoutName: z.string(),
  fileType: z.string().nullish(),
});

const handler: NextApiHandler = async (req, res) => {
  try {
    const { layoutName, fileType } = await imageReq.parseAsync(req.query);

    const { layout, config } = await getLayoutAndConfig(layoutName, req.query);
    const svg = await renderLayoutToSVG({ layout, config });

    res.statusCode = 200;
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
    );

    res.end(svg);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end(
      `<h1>Internal Error</h1><pre><code>${(e as any).message}</code></pre>`,
    );
    console.error(e);
  }
};

export default handler;
