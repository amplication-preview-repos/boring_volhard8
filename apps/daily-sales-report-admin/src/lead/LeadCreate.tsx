import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="alternateMobileNo" source="alternateMobileNo" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="email" source="email" type="email" />
        <DateTimeInput label="followUp" source="followUp" />
        <TextInput label="industryType" source="industryType" />
        <TextInput label="location" source="location" />
        <TextInput label="mobileNo" source="mobileNo" />
        <TextInput label="remarks" multiline source="remarks" />
        <TextInput label="requirement" multiline source="requirement" />
        <SelectInput
          source="typeOfClient"
          label="typeOfClient"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="websiteUrl" source="websiteUrl" />
        <TextInput label="whatsappNumber" source="whatsappNumber" />
      </SimpleForm>
    </Create>
  );
};
