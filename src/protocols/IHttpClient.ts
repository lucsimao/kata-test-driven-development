import { IUser } from '../models/IUser';

export interface IHttpClient {
  get(url: string): Promise<IUser[]>;
}
