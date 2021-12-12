import {
  filterBizEmail,
  mapUserAndCompany,
  mapUserName,
} from './services/ClientService';

import { IHttpClient } from './protocols/IHttpClient';
import { IMappedCompanyUser } from './services/interfaces/IMappedCompanyUser';

export class Client {
  constructor(private readonly httpClient: IHttpClient) {}

  async getBizEmailUsers(): Promise<string[]> {
    const httpClientResult = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const bizEmails = filterBizEmail(httpClientResult);
    const result = mapUserName(bizEmails);

    return result;
  }

  async getUsersNameAndCompanyFromUsers(): Promise<IMappedCompanyUser[]> {
    const httpClientResult = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const result = mapUserAndCompany(httpClientResult);

    return result;
  }
}
