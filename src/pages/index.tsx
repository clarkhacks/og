import { NextPage } from "next";
import React, { useMemo } from "react";
import "twin.macro";
import { Field, Label } from "../components/Field";
import { Layout } from "../components/Layout";
import { Select } from "../components/Select";
import { useConfig } from "../hooks/useConfig";
import { useIsMounted } from "../hooks/useIsMounted";
import { useLayoutConfig } from "../hooks/useLayoutConfig";
import { layouts } from "../layouts";
import { FileType } from "../types";

const Home: NextPage = () => {
  const isMounted = useIsMounted();

  return (
    <main tw="px-6 max-w-6xl w-full mx-auto">
      <header tw="text-center mt-20 mb-12 space-y-4">
        <h1 tw="text-4xl font-bold">Railway OG Image Generator</h1>
      </header>

      {/* We pull the state from local storage so need the app to be loaded in the browser */}
      {isMounted && (
        <section tw="grid gap-8 grid-cols-1 md:grid-cols-3">
          <Config />
          <Viewer />
        </section>
      )}
    </main>
  );
};

export default Home;

export const Config: React.FC = () => {
  const [{ fileType, layoutName }, setConfig] = useConfig();

  const layout = useMemo(
    () => layouts.find(l => l.name === layoutName),
    [layoutName],
  );

  return (
    <div tw="space-y-4 md:mt-8">
      <Field>
        <Label>File type</Label>
        <Select
          value={fileType}
          options={[{ value: "png" }, { value: "jpeg" }]}
          onChange={fileType =>
            setConfig(c => ({ ...c, fileType: fileType as FileType }))
          }
        />
      </Field>

      <Field>
        <Label>Layout</Label>
        <Select
          value={layoutName}
          options={layouts.map(l => ({ value: l.name }))}
          onChange={layoutName => setConfig(c => ({ ...c, layoutName }))}
        />
      </Field>

      <hr />

      {layout == null ? (
        <p>Layout {layoutName} does not exist</p>
      ) : (
        <Layout layout={layout} key={layout.name} />
      )}
    </div>
  );
};

export const Viewer: React.FC = () => {
  const [config] = useConfig();
  const [layoutConfig] = useLayoutConfig();

  const query = useMemo(() => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({ ...config, ...layoutConfig })) {
      if (value != null) {
        searchParams.set(key, value);
      }
    }

    return searchParams.toString();
  }, [config, layoutConfig]);

  const imageURL = useMemo(() => `/api/image?${query}`, [query]);

  return (
    <div tw="space-y-4 w-full col-span-2">
      <div className="image-wrapper">
        <img tw="shadow-lg w-full" src={imageURL} alt="" />
      </div>

      <div tw="break-all text-gray-600 text-right max-w-lg ml-auto">
        {window.location.origin}
        {imageURL}
      </div>
    </div>
  );
};
