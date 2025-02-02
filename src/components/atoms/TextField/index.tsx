import styles from "@styles/components/atoms/text-field.module.scss";

import type { TextFieldInput, TextFieldType } from "./types";

import clsx from "clsx";

export interface TextFieldProps extends TextFieldInput {
  type?: TextFieldType;
}
const TextField = ({ children, className, ...props }: TextFieldProps) => {
  return <input className={clsx(styles.textField, className)} {...props} />;
};

export default TextField;
