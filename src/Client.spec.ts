import { Client } from './Client';

const fakeBizUser = { email: 'any_email.biz' };

const makeSut = () => {
  const sut = new Client();
  return { sut };
};

describe('Client Test', () => {
  describe('getBizEmailUsers', () => {
    it('SHOULD return users who have .biz email WHEN method is called', () => {
      const { sut } = makeSut();

      const result = sut.getBizEmailUsers();

      expect(result).toEqual(fakeBizUser);
    });
  });
});
