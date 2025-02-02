import type { CookieStorage } from "./types";
import Cookies from "js-cookie";

const cookieStorage: CookieStorage = {
  getItem: (key) => {
    const cookie = Cookies.get(key);
    try {
      return cookie ? JSON.parse(cookie) : null;
    } catch {
      return null;
    }
  },
  setItem: (key, value) => {
    Cookies.set(key, JSON.stringify(value), { expires: 7, path: "/" });
  },
  removeItem: (key) => {
    Cookies.remove(key, { path: "/" });
  },
};

export default cookieStorage;
