export enum RoleType {
    STUDENT =  "STUDENT",
    INSTRUCTOR =  "INSTRUCTOR",
}

export interface User {
  id: any;
  email: string;
  role: RoleType;
  access_token: string;
}
