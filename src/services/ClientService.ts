export const filterBizEmail = (users: any[]) => {
  const result = users.filter((user: any) => user.email.includes('.biz'));

  return result;
};

export const mapUserName = (users: any[]) => {
  const result = users.map((user: any) => user.name);

  return result;
};

export const mapUserAndCompany = (users: any[]) => {
  const result = users.map((user: any) => ({
    user: user?.username,
    company: user?.company?.name,
  }));

  return result;
};
