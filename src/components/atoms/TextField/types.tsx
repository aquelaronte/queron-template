export type TextFieldType = "text" | "password" | "email" | "number";

export type TextFieldInput = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;
