import { simpleLayout } from "./simpleLayout";
import { ILayout, ILayoutConfig, LayoutComponent } from "./types";

export const layouts: ILayout<any>[] = [simpleLayout];

export const getLayout = (layoutName: string): ILayout => {
  const layout = layouts.find(l => l.name === layoutName);

  if (layout == null) {
    throw new Error(`Layout ${layoutName} not found`);
  }

  return layout;
};

export const getDefaultLayoutConfig = (layout: ILayout): ILayoutConfig => {
  const config: ILayoutConfig = {};

  for (const p of layout.properties) {
    if (p.default != null) {
      config[p.name] = p.default?.toString();
    }
  }

  return config;
};

export const getLayoutConfigFromQuery = (
  layoutName: string,
  query: Record<string, string | string[]>,
): ILayoutConfig => {
  const layout = getLayout(layoutName);

  const config: ILayoutConfig = getDefaultLayoutConfig(layout);
  for (const p of layout.properties) {
    if (query[p.name] != null) {
      config[p.name] = query[p.name].toString();
    }
  }

  return config;
};

export const getLayoutAndConfig = (
  layoutName: string,
  query: Record<string, string | string[]>,
): { layout: ILayout; config: ILayoutConfig } => {
  const layout = getLayout(layoutName);
  const config = getLayoutConfigFromQuery(layoutName, query);

  return { layout, config };
};
