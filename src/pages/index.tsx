import { NextPage } from "next";
import React, { useMemo, useState } from "react";
import "twin.macro";
import { Field, Label } from "../components/Field";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import { Select } from "../components/Select";
import { useIsMounted } from "../hooks/useIsMounted";
import { layouts } from "../layouts";
import { useStore } from "../store";
import { FileType, Theme } from "../types";

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
          <OGImage />
        </section>
      )}
    </main>
  );
};

export default Home;

export const Config: React.FC = () => {
  const [{ theme, fileType, layout: layoutName }, setStore] = useStore();

  const layout = useMemo(
    () => layouts.find(l => l.name === layoutName),
    [layoutName],
  );

  return (
    <div tw="space-y-4">
      <Field>
        <Label>Theme</Label>
        <Select
          value={theme}
          options={[{ value: "light" }, { value: "dark" }]}
          onChange={theme => setStore(s => ({ ...s, theme: theme as Theme }))}
        />
      </Field>

      <Field>
        <Label>File type</Label>
        <Select
          value={fileType}
          options={[{ value: "png" }, { value: "jpeg" }]}
          onChange={fileType =>
            setStore(s => ({ ...s, fileType: fileType as FileType }))
          }
        />
      </Field>

      <Field>
        <Label>Layout</Label>
        <Select
          value={layoutName}
          options={layouts.map(l => ({ value: l.name }))}
          onChange={layout => setStore(s => ({ ...s, layout }))}
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

export const OGImage: React.FC = () => {
  return (
    <div className="image-wrapper" tw="col-span-2">
      <img tw="shadow-lg w-full" src="/api/boooop" alt="" />
    </div>
  );
};
