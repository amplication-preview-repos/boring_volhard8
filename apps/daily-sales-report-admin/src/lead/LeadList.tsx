import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leads"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
