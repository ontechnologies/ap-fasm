export const CREATE_ASSET_GROUPS_TABLE = 
`CREATE TABLE IF NOT EXISTS group
(
    groupid uuid primary key,
    groupname varchar(30) not null,
    assetdepreciation real,
    assetlifespan int,
)`;

export const DELETE_ASSET_GROUPS_TABLE =
`drop table group`;

export const CREATE_ASSET_GROUP =
`insert into group(groupid, groupname, assetdepreciation,assetlifespan)
values ($1,$2,$3,$4)`;