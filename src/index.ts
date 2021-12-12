import { Client } from './Client';

const client = new Client();

/**
 * 1.  O nome de todos os usuários que tem um email terminado com .biz
 */
client.getBizEmailUsers().then((result: any) => {
  console.log(`.BIZ: ${JSON.stringify(result)}\n`);
});

/**
 * 2. Username e company name de todos os usuários
 */
client.getUsersNameAndCompanyFromUsers().then((result: any) => {
  console.log(`\nName and Company:  ${JSON.stringify(result)}`);
});
