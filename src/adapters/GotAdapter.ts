import { IHttpClient } from '../protocols/IHttpClient';
import { IUser } from '../models/IUser';
import got from 'got';

export class GotAdapter implements IHttpClient {
  async get(url: string): Promise<IUser[]> {
    const axiosResponse = await got.get<IUser[]>(url, { responseType: 'json' });
    const result = axiosResponse.body;

    return result;
  }
}
