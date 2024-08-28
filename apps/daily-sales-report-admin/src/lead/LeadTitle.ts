import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "companyName";

export const LeadTitle = (record: TLead): string => {
  return record.companyName?.toString() || String(record.id);
};
