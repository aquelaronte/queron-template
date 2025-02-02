import type React from "react";

import { useNavigate } from "@tanstack/react-router";
import Button, { type ButtonProps } from "../Button";
import { useCallback } from "react";

export interface AppLinkProps extends ButtonProps {
  to: string;
}
const AppLink = ({ onClick, to, ...props }: AppLinkProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(e);
      navigate({ to });
    },
    [onClick, navigate, to],
  );

  return <Button type="link" {...props} onClick={handleClick} />;
};

export default AppLink;
