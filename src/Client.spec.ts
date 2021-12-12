import { Client } from './Client';
import axios from 'axios';

jest.mock('axios');

const fakeBizUser = { email: 'any_email.biz' };
axios.get = jest.fn().mockResolvedValue(fakeBizUser);

const makeSut = () => {
  const sut = new Client();
  return { sut };
};

describe('Client Test', () => {
  describe('getBizEmailUsers', () => {
    it('SHOULD call axios.get with url WHEN method is called', () => {
      const { sut } = makeSut();
      const getSpy = jest.spyOn(axios, 'get');

      sut.getBizEmailUsers();

      expect(getSpy).toBeCalledWith(
        'https://jsonplaceholder.typicode.com/users'
      );
    });

    it('SHOULD return users who have .biz email WHEN method is called', async () => {
      const { sut } = makeSut();

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual(fakeBizUser);
    });
  });
});
