import React from "react";
import "twin.macro";
import { UpdateState } from "use-local-storage-state/src/useLocalStorageStateBase";
import { useLayoutConfig } from "../hooks/useLayoutConfig";
import {
  ILayout,
  ILayoutConfig,
  ILayoutProperty,
  ILayoutValue,
} from "../types";
import { Field, Label } from "./Field";
import { Input } from "./Input";
import { Select } from "./Select";

export interface Props {
  layout: ILayout;
}

export const Layout: React.FC<Props> = ({ layout }) => {
  return (
    <div className={`layout-${layout.name}`} tw="space-y-4">
      {layout.properties.map(p => (
        <LayoutProperty key={p.name} property={p} />
      ))}
    </div>
  );
};

export const LayoutProperty: React.FC<{
  property: ILayoutProperty;
}> = ({ property: p }) => {
  const [layoutConfig, setLayoutConfig] = useLayoutConfig();

  return (
    <Field>
      <Label>{p.name} </Label>

      {p.type === "text" ? (
        <Input
          placeholder={p.placeholder ?? `Value for ${p.name}`}
          value={layoutConfig[p.name] ?? ""}
          onChange={e => setLayoutConfig({ [p.name]: e.target.value })}
        />
      ) : p.type === "select" ? (
        <Select options={p.options.map(value => ({ value }))} />
      ) : null}
    </Field>
  );
};
