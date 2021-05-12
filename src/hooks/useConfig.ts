import { createLocalStorageStateHook } from "use-local-storage-state";
import { simpleLayout } from "../layouts";
import { IConfig } from "../types";

export const defaultConfig: IConfig = {
  theme: "light",
  fileType: "png",
  layoutName: simpleLayout.name,
};

export const useConfig = createLocalStorageStateHook<IConfig>(
  "config",
  defaultConfig,
);
