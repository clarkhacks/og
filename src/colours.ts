import { Colours, Theme } from "./types";

export const colourThemes: Record<Theme, Colours> = {
  light: {
    fg: "black",
    bg: "white",
    gray: "dimgray",
  },
  dark: {
    fg: "white",
    bg: "black",
    gray: "dimgray",
  },
};
