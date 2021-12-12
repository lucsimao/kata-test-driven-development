import { Client } from './Client';
import { IHttpClient } from './protocols/IHttpClient';
import { IUser } from './models/IUser';

const fakeBizUser = [
  {
    name: 'any_name',
    username: 'any_username',
    email: 'any_email.biz',
    company: { name: 'any_company' },
  },
];

const makeHttpClientStub = () => {
  class HttpClientStub implements IHttpClient {
    async get(_url: string): Promise<IUser[]> {
      return fakeBizUser;
    }
  }

  const result = new HttpClientStub();

  return result;
};

const makeSut = () => {
  const fakeUrl = 'any_url';
  const httpClientStub = makeHttpClientStub();

  const sut = new Client(httpClientStub, fakeUrl);

  return { sut, httpClientStub, fakeUrl };
};

describe('Client Test', () => {
  describe('getBizEmailUsers', () => {
    it('SHOULD call httpClient.get with url WHEN method is called', () => {
      const { sut, httpClientStub, fakeUrl } = makeSut();
      const getSpy = jest.spyOn(httpClientStub, 'get');

      sut.getBizEmailUsers();

      expect(getSpy).toBeCalledWith(`${fakeUrl}/users`);
    });

    it('SHOULD return an empty array WHEN httpClient returns an empty array', async () => {
      const { sut, httpClientStub } = makeSut();
      jest.spyOn(httpClientStub, 'get').mockResolvedValueOnce([]);

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual([]);
    });

    it('SHOULD return an empty array WHEN httpClient returns non empty array but with no .biz email', async () => {
      const { sut, httpClientStub } = makeSut();
      jest.spyOn(httpClientStub, 'get').mockResolvedValueOnce([
        {
          name: 'any_name',
          username: 'any_username',
          email: 'invalid_email.net',
          company: { name: 'any_company' },
        },
      ]);

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual([]);
    });

    it('SHOULD return users who have .biz email WHEN method is called', async () => {
      const { sut } = makeSut();

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual(['any_name']);
    });

    it('SHOULD throw WHEN httpClient throws', async () => {
      const { sut, httpClientStub } = makeSut();
      jest
        .spyOn(httpClientStub, 'get')
        .mockRejectedValueOnce(new Error('any_httpClient_error'));

      const promise = sut.getBizEmailUsers();

      await expect(promise).rejects.toThrow(new Error('any_httpClient_error'));
    });
  });

  describe('getUsersNameAndCompanyFromUsers', () => {
    it('SHOULD call httpClient.get with url WHEN method is called', () => {
      const { sut, httpClientStub, fakeUrl } = makeSut();
      const getSpy = jest.spyOn(httpClientStub, 'get');

      sut.getBizEmailUsers();

      expect(getSpy).toBeCalledWith(`${fakeUrl}/users`);
    });

    it('SHOULD return an empty array WHEN httpClient returns an empty array', async () => {
      const { sut, httpClientStub } = makeSut();
      jest.spyOn(httpClientStub, 'get').mockResolvedValueOnce([]);

      const result = await sut.getUsersNameAndCompanyFromUsers();

      expect(result).toEqual([]);
    });

    it('SHOULD return user name as user and company name as company WHEN httpClient return a valid array', async () => {
      const { sut } = makeSut();

      const result = await sut.getUsersNameAndCompanyFromUsers();

      expect(result).toEqual([
        {
          user: 'any_username',
          company: 'any_company',
        },
      ]);
    });

    it('SHOULD throw WHEN httpClient throws', async () => {
      const { sut, httpClientStub } = makeSut();
      jest
        .spyOn(httpClientStub, 'get')
        .mockRejectedValueOnce(new Error('any_httpClient_error'));

      const promise = sut.getUsersNameAndCompanyFromUsers();

      await expect(promise).rejects.toThrow(new Error('any_httpClient_error'));
    });
  });
});
