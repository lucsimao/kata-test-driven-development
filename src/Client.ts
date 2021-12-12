import {
  filterBizEmail,
  mapUserAndCompany,
  mapUserName,
} from './services/ClientService';

import { IMappedCompanyUser } from './services/interfaces/IMappedCompanyUser';
import axios from 'axios';

export class Client {
  async getBizEmailUsers(): Promise<string[]> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const bizEmails = filterBizEmail(data);
    const result = mapUserName(bizEmails);

    return result;
  }

  async getUsersNameAndCompanyFromUsers(): Promise<IMappedCompanyUser[]> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const result = mapUserAndCompany(data);

    return result;
  }
}
