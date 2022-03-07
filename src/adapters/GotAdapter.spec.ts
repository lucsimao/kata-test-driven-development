import { GotAdapter } from './GotAdapter';
import got from 'got';

jest.mock('got');

const fakeGotResult = { body: [{ name: 'any_name' }] };
jest.spyOn(got, 'get').mockResolvedValue(fakeGotResult);

const makeSut = () => {
  const sut = new GotAdapter();

  return { sut };
};

describe('Tests', () => {
  describe('make', () => {
    it('should call got.get with url when method is called', async () => {
      const { sut } = makeSut();
      const url = 'any_url';
      const getSpy = jest.spyOn(got, 'get');

      await sut.get(url);

      expect(getSpy).toBeCalledWith(url, { responseType: 'json' });
    });

    it('should return got.data when method is called', async () => {
      const { sut } = makeSut();
      const url = 'any_url';

      const result = await sut.get(url);

      expect(result).toBe(fakeGotResult.body);
    });

    it('should throw when got throws', async () => {
      const { sut } = makeSut();
      const url = 'any_url';
      jest.spyOn(got, 'get').mockRejectedValueOnce(new Error('any_got_error'));

      const promise = sut.get(url);

      await expect(promise).rejects.toThrow(new Error('any_got_error'));
    });
  });
});
