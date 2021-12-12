import { Client } from '../Client';
import { HttpClient } from '../adapters';

export const createHttpClient = (url: string) => {
  const httpClient = new HttpClient();
  const result = new Client(httpClient, url);

  return result;
};
