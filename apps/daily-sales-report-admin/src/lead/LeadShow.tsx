import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="alternateMobileNo" source="alternateMobileNo" />
        <TextField label="companyName" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="followUp" source="followUp" />
        <TextField label="ID" source="id" />
        <TextField label="industryType" source="industryType" />
        <TextField label="location" source="location" />
        <TextField label="mobileNo" source="mobileNo" />
        <TextField label="remarks" source="remarks" />
        <TextField label="requirement" source="requirement" />
        <TextField label="typeOfClient" source="typeOfClient" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="websiteUrl" source="websiteUrl" />
        <TextField label="whatsappNumber" source="whatsappNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
