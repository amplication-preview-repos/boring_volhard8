export type Lead = {
  alternateMobileNo: string | null;
  companyName: string | null;
  createdAt: Date;
  email: string | null;
  followUp: Date | null;
  id: string;
  industryType: string | null;
  location: string | null;
  mobileNo: string | null;
  remarks: string | null;
  requirement: string | null;
  typeOfClient?: "Option1" | null;
  updatedAt: Date;
  websiteUrl: string | null;
  whatsappNumber: string | null;
};
