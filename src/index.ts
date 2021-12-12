import { Client } from './Client';
import { IHttpClient } from './protocols/IHttpClient';

const client = new Client({} as IHttpClient);

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
