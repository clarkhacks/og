import { z } from "zod";

export type FileType = "svg" | "png";

export interface IConfig {
  fileType?: FileType;
  layoutName: string;
}

export type ILayout<TConfig extends z.ZodType = z.AnyZodObject> = {
  name: string;
  config: TConfig;
  properties: ILayoutProperty[];
  Component: LayoutComponent<z.infer<TConfig>>;
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
