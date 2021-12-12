import { Client } from './Client';
import axios from 'axios';

jest.mock('axios');

const fakeBizUser = { data: [{ name: 'any_name', email: 'any_email.biz' }] };
jest.spyOn(axios, 'get').mockResolvedValue(fakeBizUser);

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

    it('SHOULD return an empty array WHEN axios returns an empty array', async () => {
      const { sut } = makeSut();
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: [] });

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual([]);
    });

    it('SHOULD return an empty array WHEN axios returns non empty array but with no .biz email', async () => {
      const { sut } = makeSut();
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: [{ email: 'invalid_email.net' }] });

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual([]);
    });

    it('SHOULD return users who have .biz email WHEN method is called', async () => {
      const { sut } = makeSut();

      const result = await sut.getBizEmailUsers();

      expect(result).toEqual(['any_name']);
    });

    it('SHOULD throw WHEN axios throws', async () => {
      const { sut } = makeSut();
      jest
        .spyOn(axios, 'get')
        .mockRejectedValueOnce(new Error('any_axios_error'));

      const promise = sut.getBizEmailUsers();

      await expect(promise).rejects.toThrow(new Error('any_axios_error'));
    });
  });

  describe('getUsersNameAndCompanyFromUsers', () => {
    it('SHOULD call axios.get with url WHEN method is called', () => {
      const { sut } = makeSut();
      const getSpy = jest.spyOn(axios, 'get');

      sut.getUsersNameAndCompanyFromUsers();
      expect(getSpy).toBeCalledWith(
        'https://jsonplaceholder.typicode.com/users'
      );
    });
  });
});
