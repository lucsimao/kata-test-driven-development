import { Client } from './Client';
import axios from 'axios';

const fakeBizUser = { email: 'any_email.biz' };

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

    it('SHOULD return users who have .biz email WHEN method is called', () => {
      const { sut } = makeSut();

      const result = sut.getBizEmailUsers();

      expect(result).toEqual(fakeBizUser);
    });
  });
});
