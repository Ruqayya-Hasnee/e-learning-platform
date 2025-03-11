export enum RoleType {
    STUDENT =  "STUDENT",
    INSTRUCTOR =  "INSTRUCTOR",
}

export interface User {
  email: string;
  role: RoleType;
}
