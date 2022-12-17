import useLocalStorageState from "use-local-storage-state";
import { layouts } from "../layouts";
import { IConfig } from "../layouts/types";

export const defaultConfig: IConfig = {
  layoutName: layouts[0].name,
};

// export const useConfig = createLocalStorageStateHook<IConfig>(
//   "config-v2",
//   defaultConfig,
// );

export const useConfig = () =>
  useLocalStorageState("config-v3", {
    defaultValue: defaultConfig,
  });
