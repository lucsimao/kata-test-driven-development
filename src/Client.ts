import {
  filterBizEmail,
  mapUserAndCompany,
  mapUserName,
} from './services/ClientService';

import { IHttpClient } from './protocols/IHttpClient';
import { IMappedCompanyUser } from './services/interfaces/IMappedCompanyUser';

export class Client {
  constructor(
    private readonly httpClient: IHttpClient,
    private readonly url: string
  ) {}

  async getBizEmailUsers(): Promise<string[]> {
    const endpoint = `${this.url}/users`;
    const httpClientResult = await this.httpClient.get(endpoint);

    const bizEmails = filterBizEmail(httpClientResult);
    const result = mapUserName(bizEmails);

    return result;
  }

  async getUsersNameAndCompanyFromUsers(): Promise<IMappedCompanyUser[]> {
    const endpoint = `${this.url}/users`;
    const httpClientResult = await this.httpClient.get(endpoint);

    const result = mapUserAndCompany(httpClientResult);

    return result;
  }
}
