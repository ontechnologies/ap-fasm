export const CREATE_ASSETS_TABLE =
`CREATE TABLE IF NOT EXISTS assets
(
    assetid int primary key,
    assetname varchar(30) not null,
    aquistiondate date,
    assetprice real,
    assetvendor uuid references vendor(vendorid),
    assetgroup uuid references assetGroup(groupid),
    recordedon date,
    recorder varchar(30) references users(userid),
    category varchar(15),
    )`;

export const DELETE_ASSETS_TABLE =
`drop table assets`;

export const CREATE_ASSET = 
`insert into assets (assetid, assetname, aquistiondate, assetprice,assetvendor, assetgroup, recordedon, recorder, category)
 values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`;
