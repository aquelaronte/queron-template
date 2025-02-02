import type { ReactNode } from "react";
import styles from "./styles.module.scss";

import clsx from "clsx";
import Button from "@/components/atoms/Button";
import useThemeStore from "@/stores/theme";

export interface AuthLayoutProps {
  title?: ReactNode;
  children?: React.ReactNode;
  className?: string;
}
const AuthLayout = ({ children, title, className }: AuthLayoutProps) => {
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={clsx(styles.authLayout, className)}>
      <Button
        type="outlined"
        variant="info"
        className={styles.authLayoutTheme}
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </Button>
      <div className={styles.authLayoutTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.authLayoutForm}>{children}</div>
    </div>
  );
};

export default AuthLayout;
