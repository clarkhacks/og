export type FileType = "png" | "jpeg";

export interface IConfig {
  fileType: FileType;
  layoutName: string;
}

export interface ILayout {
  name: string;
  properties: ILayoutProperty[];
  getCSS?: (c: ILayoutConfig & IConfig) => string;
  getBody?: (c: ILayoutConfig & IConfig) => string;
}

export type ILayoutProperty = BaseLayoutProperty &
  (
    | {
        type: "text";
        default?: string;
        placeholder?: string;
      }
    | {
        type: "select";
        options: string[];
        default?: string;
      }
  );

export interface BaseLayoutProperty {
  name: string;
  description?: string;
}

export type ILayoutValue = string | string[];
export type ILayoutConfig = Record<string, ILayoutValue>;

export interface Colours {
  fg: string;
  bg: string;
  gray: string;
  pink: string;
}
