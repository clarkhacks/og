import { createLocalStorageStateHook } from "use-local-storage-state";
import { simpleLayout } from "./layouts";
import { FileType, Theme } from "./types";

export interface StoreState {
  theme: Theme;
  fileType: FileType;
  layout: string;
}

const defaultStoreState: StoreState = {
  theme: "light",
  fileType: "png",
  layout: simpleLayout.name,
};

export const useStore = createLocalStorageStateHook<StoreState>(
  "state",
  defaultStoreState,
);
