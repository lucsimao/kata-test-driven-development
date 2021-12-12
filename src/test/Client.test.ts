import apiReturnFixtures from './fixtures/apiReturnFixtures.json';
import bizEmailFixtures from './fixtures/bizEmailFixtures.json';
import { createHttpClient } from '../factories/HttpClientFactory';
import nock from 'nock';
import userNameAndCompanyFixtures from './fixtures/userNameAndCompanyFixtures.json';

const makeSut = () => {
  const url = 'https://jsonplaceholder.typicode.com';
  const sut = createHttpClient(url);

  return { sut };
};

describe('Tests', () => {
  beforeEach(() => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/users')
      .reply(200, apiReturnFixtures);
  });

  describe('getBizEmailUsers', () => {
    it('should return value when method is called', async () => {
      const { sut } = makeSut();

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual(bizEmailFixtures);
    });
  });

  describe('getUsersNameAndCompanyFromUsers', () => {
    it('should return value when method is called', async () => {
      const { sut } = makeSut();

      const result = await sut.getUsersNameAndCompanyFromUsers();

      expect(result).toEqual(userNameAndCompanyFixtures);
    });
  });
});
