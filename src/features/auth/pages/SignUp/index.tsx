import AppLink from "@/components/atoms/AppLink";
import Button from "@/components/atoms/Button";
import FormTextField from "@/components/molecules/FormTextField";
import AuthLayout from "@/features/auth/components/layouts/AuthLayout";

export default function SignUp() {
  return (
    <AuthLayout title="Sign Up">
      <FormTextField label="First Name" placeholder="First Name" />
      <FormTextField label="Last Name" placeholder="Last Name" />
      <FormTextField label="Email" placeholder="Email" />
      <FormTextField label="Password" placeholder="Password" />
      <FormTextField label="Repeat Password" placeholder="Repeat Password" />
      <Button type="tinted">Sign Up</Button>
      <p>
        Have an account already? <AppLink to="/sign-in">Sign In</AppLink>
      </p>
    </AuthLayout>
  );
}
