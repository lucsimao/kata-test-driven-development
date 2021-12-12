import axios from 'axios';
export class Client {
  async getBizEmailUsers(): Promise<unknown> {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const bizEmails = this.filterBizEmail(data);
    const result = this.mapUserName(bizEmails);

    return result;
  }

  private filterBizEmail(users: any[]) {
    const result = users.filter((user: any) => user.email.includes('.biz'));

    return result;
  }

  private mapUserName(users: any[]) {
    const result = users.map((user: any) => user.name);

    return result;
  }

  async getUsersNameAndCompanyFromUsers() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    const result = [];
    for (let user of data) {
      const userName = user.username;
      const companyName = user.company.name;
      result.push({ user: userName, company: companyName });
    }
    return result;
  }
}
