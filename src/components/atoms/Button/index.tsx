import styles from "@styles/components/atoms/button.module.scss";

import type { HTMLAttributes, ReactNode } from "react";
import type { ButtonSize, ButtonType, ButtonVariant } from "./types";

import clsx from "clsx";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
const Button = ({
  children,
  type = "filled",
  size = "medium",
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, className)}
      data-type={type}
      data-size={size}
      data-variant={variant}
    >
      {children}
    </button>
  );
};

export default Button;
