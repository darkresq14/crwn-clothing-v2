import { InputHTMLAttributes, FC } from "react";
import { FormInputLabel, Group, Input } from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {
        label && (
          <FormInputLabel
            shrink={Boolean(
              otherProps.value &&
                typeof otherProps.value === "string" &&
                otherProps.value.length
            )}
          >
            {label}
          </FormInputLabel>
        )

        // <label
        //   className={`${
        //     otherProps.value.length ? "shrink" : ""
        //   } form-input-label`}
        // >
        //   {label}
        // </label>
      }
    </Group>
  );
};

export default FormInput;
