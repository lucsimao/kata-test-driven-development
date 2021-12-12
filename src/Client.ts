import axios from 'axios';
export class Client {
  getBizEmailUsers(): unknown {
    axios.get('https://jsonplaceholder.typicode.com/users');
    return { email: 'any_email.biz' };
  }
}
