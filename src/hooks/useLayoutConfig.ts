import { getDefaultLayoutConfig, layouts } from "../layouts";
import { useConfig } from "./useConfig";
import { useMemo } from "react";
import { ILayoutConfig } from "../types.old";
import { createLocalStorageStateHook } from "use-local-storage-state";

const useAllLayoutConfigs = createLocalStorageStateHook("layout-configs", {});

export const useLayoutConfig = (): [
  ILayoutConfig,
  (layoutConfig: ILayoutConfig) => void,
] => {
  const [{ layoutName }] = useConfig();
  const layout = useMemo(
    () => layouts.find(l => l.name === layoutName),
    [layoutName],
  );

  const defaultConfig = useMemo(
    () => (layout != null ? getDefaultLayoutConfig(layout) : {}),
    [layout],
  );

  const [allLayoutConfig, setAllLayoutConfigs] = useAllLayoutConfigs();

  const layoutConfig = allLayoutConfig[layoutName] ?? {};

  const setLayoutConfig = (config: ILayoutConfig) => {
    setAllLayoutConfigs(all => ({
      ...all,
      [layoutName]: {
        ...layoutConfig,
        ...config,
      },
    }));
  };

  return [
    {
      ...defaultConfig,
      ...layoutConfig,
    },
    setLayoutConfig,
  ];
};
