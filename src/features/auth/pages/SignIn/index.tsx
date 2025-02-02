import AppLink from "@/components/atoms/AppLink";
import Button from "@/components/atoms/Button";
import FormTextField from "@/components/molecules/FormTextField";
import AuthLayout from "@/features/auth/components/layouts/AuthLayout";

export default function SignIn() {
  return (
    <AuthLayout title="Sign In">
      <FormTextField label="Email" placeholder="Email" />
      <FormTextField label="Password" placeholder="Password" />
      <Button type="tinted">Sign In</Button>
      <p>
        Doesn't have an account? <AppLink to="/sign-up">Sign Up</AppLink>
      </p>
    </AuthLayout>
  );
}
