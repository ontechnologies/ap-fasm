export const createUser = `
insert into table users(userid, firstname,lastname,role,department,email,username, password,created_on,modified_on)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`;
