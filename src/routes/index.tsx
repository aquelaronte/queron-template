import useAuthStore from "@/stores/auth";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    if (token) {
      navigate({ to: "/dashboard", replace: true });
    } else {
      navigate({ to: "/sign-in", replace: true });
    }
  }, [navigate, token]);

  return <></>;
}
