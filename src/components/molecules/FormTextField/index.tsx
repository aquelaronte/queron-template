import styles from "@styles/components/molecules/form-text-field.module.scss";

import type { IFormTextFieldClassNames } from "./types";

import TextField, { type TextFieldProps } from "@/components/atoms/TextField";
import { useId } from "react";
import clsx from "clsx";

export interface FormTextFieldProps extends Omit<TextFieldProps, "className"> {
  label?: string;
  className?: IFormTextFieldClassNames;
}
const FormTextField = ({
  label,
  id,
  className,
  ...props
}: FormTextFieldProps) => {
  const generatedId = useId();

  const targetId = id || generatedId;

  return (
    <div className={clsx(styles.formTextField, className?.container)}>
      {label ? (
        <label
          htmlFor={targetId}
          className={clsx(styles.formTextFieldLabel, className?.label)}
        >
          {label}
        </label>
      ) : (
        <></>
      )}
      <TextField id={targetId} className={className?.textField} {...props} />
    </div>
  );
};

export default FormTextField;
