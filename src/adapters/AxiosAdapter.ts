import { IHttpClient } from '../protocols/IHttpClient';
import { IUser } from '../models/IUser';
import axios from 'axios';

export class AxiosAdapter implements IHttpClient {
  async get(url: string): Promise<IUser[]> {
    const axiosResponse = await axios.get<IUser[]>(url);

    return [{ name: 'any_name' }] as IUser[];
  }
}
