import SignUp from "@/features/auth/pages/SignUp";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUp />;
}
