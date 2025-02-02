import type { AuthStore } from "./types";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import cookieStorage from "@/utils/cookieStorage";

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      clearToken: () => set({ token: null }),
      setToken: (token) => set({ token }),
      token: cookieStorage.getItem("token") as string | null,
    }),
    {
      name: "auth",
      // biome-ignore lint/suspicious/noExplicitAny: This storage works with any type
      storage: cookieStorage as any,
    },
  ),
);

export default useAuthStore;
