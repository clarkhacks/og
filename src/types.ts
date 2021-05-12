export type Theme = "light" | "dark";
export type FileType = "png" | "jpeg";

export interface IConfig {
  theme: Theme;
  fileType: FileType;
}

export interface ILayout {
  name: string;
  properties: LayoutProperty[];
}

export type LayoutProperty = BaseLayoutProperty &
  (
    | {
        type: "text";
      }
    | {
        type: "array";
        subProperty: LayoutProperty;
      }
    | {
        type: "select";
        options: string[];
      }
  );

export interface BaseLayoutProperty {
  name: string;
  description?: string;
}
