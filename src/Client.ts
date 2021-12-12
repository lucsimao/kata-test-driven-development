import axios from 'axios';
export class Client {
  async getBizEmailUsers(): Promise<unknown> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const result = [];

    for (let user of data) {
      const email = user.email;

      if (
        email.charAt(email.length - 4) === '.' &&
        email.charAt(email.length - 3) === 'b' &&
        email.charAt(email.length - 2) === 'i' &&
        email.charAt(email.length - 1) === 'z'
      ) {
        result.push(user.name);
      }
    }

    return result;
  }

  async getUsersNameAndCompanyFromUsers() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    return data;
  }
}
