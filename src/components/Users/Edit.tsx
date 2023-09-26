import React from "react";
import {
  useAllFormFields,
  useField,
  useForm,
  useFormFields,
} from "payload/components/forms";
import { Edit, type Props } from "payload/components/views/Edit";
export const UsersEdit: React.FC<Props> = (props) => {
  const { value, setValue } = useField<string>({ path: "email" });
  const email = useFormFields(([fields]) => fields.email);
  const fields = useAllFormFields();
  const form = useForm();

  console.log("useField email:", value);
  console.log("useFormFields email:", email);
  console.log("useAllFormFields:", fields);
  console.log("useForm:", form);

  return (
    <div>
      {!props.isLoading && <Edit {...props} />}
    </div>
  );
};
