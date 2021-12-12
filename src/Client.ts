import {
  filterBizEmail,
  mapUserAndCompany,
  mapUserName,
} from './services/ClientService';

import axios from 'axios';

export class Client {
  async getBizEmailUsers(): Promise<unknown> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const bizEmails = filterBizEmail(data);
    const result = mapUserName(bizEmails);

    return result;
  }

  async getUsersNameAndCompanyFromUsers() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const result = mapUserAndCompany(data);

    return result;
  }
}
