import { IMappedCompanyUser } from './interfaces/IMappedCompanyUser';
import { IUser } from '../models/IUser';

export const filterBizEmail = (users: IUser[]): IUser[] => {
  const result = users.filter((user: IUser) => user.email.includes('.biz'));

  return result;
};

export const mapUserName = (users: IUser[]): string[] => {
  const result = users.map((user: IUser) => user.name);

  return result;
};

export const mapUserAndCompany = (users: IUser[]): IMappedCompanyUser[] => {
  const result = users.map((user: IUser) => ({
    user: user?.username,
    company: user?.company?.name,
  }));

  return result;
};
