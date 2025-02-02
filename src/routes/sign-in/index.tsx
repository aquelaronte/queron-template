import SignIn from "@/features/auth/pages/SignIn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignIn />;
}
