import axios from 'axios';
export class Client {
  async getBizEmailUsers(): Promise<unknown> {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return result;
  }
}
