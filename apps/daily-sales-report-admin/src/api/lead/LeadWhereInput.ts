import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  alternateMobileNo?: StringNullableFilter;
  companyName?: StringNullableFilter;
  email?: StringNullableFilter;
  followUp?: DateTimeNullableFilter;
  id?: StringFilter;
  industryType?: StringNullableFilter;
  location?: StringNullableFilter;
  mobileNo?: StringNullableFilter;
  remarks?: StringNullableFilter;
  requirement?: StringNullableFilter;
  typeOfClient?: "Option1";
  websiteUrl?: StringNullableFilter;
  whatsappNumber?: StringNullableFilter;
};
