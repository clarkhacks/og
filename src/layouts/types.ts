export type FileType = "svg" | "png";

export interface IConfig {
  fileType: FileType;
  layoutName: string;
}

export type ILayout<TConfig = any> = {
  name: string;
  properties: ILayoutProperty[];
  Component: LayoutComponent<TConfig>;
};

export type LayoutComponent<TConfig> = React.ComponentType<{
  config: TConfig;
}>;

export type ILayoutProperty = { name: string } & (
  | {
      type: "text";
      default?: string;
      placeholder?: string;
    }
  | {
      type: "number";
      default?: string;
      placeholder?: string;
    }
  | {
      type: "select";
      options: string[];
      default?: string;
    }
  | {
      type: "color";
      default?: string;
    }
);

export type ILayoutValue = string;
export type ILayoutConfig = Record<string, ILayoutValue>;
