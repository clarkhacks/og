import React from "react";
import { ILayout } from "../types";
import { Field, Label } from "./Field";
import { Input } from "./Input";
import { Select } from "./Select";
import "twin.macro";

export interface Props {
  layout: ILayout;
}

export const Layout: React.FC<Props> = ({ layout, ...props }) => {
  return (
    <div className={`layout-${layout.name}`} tw="space-y-4">
      {layout.properties.map(p => (
        <Field key={p.name}>
          <Label>{p.name} </Label>

          {p.type === "text" ? (
            <Input placeholder={`Value for ${p.name}`} />
          ) : p.type === "select" ? (
            <Select options={p.options.map(value => ({ value }))} />
          ) : null}
        </Field>
      ))}
    </div>
  );
};
