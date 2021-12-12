import { ICompany } from './ICompany';

export interface IUser {
  name: string;
  username: string;
  email: string;
  company: ICompany;
}
