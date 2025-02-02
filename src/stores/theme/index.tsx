import { create } from "zustand";
import type { Theme, ThemeStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme: Theme) => set({ theme: theme }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
