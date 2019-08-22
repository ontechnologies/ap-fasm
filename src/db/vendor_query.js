export const CREATE_VENDOR_TABLE = 
`CREATE TABLE IF NOT EXISTS vendor
(
    vendorid uuid primary key,
    vendorname varchar(30), 
    vendoremail varchar(30),
    vendoraddress varchar(50),
    vendorphone varchar(15)
)`

export const DELETE_VENDOR_TABLE = 
'drop table vendor';

export const CREATE_VENDOR = 
`insert into vendor (vendorid, vendorname, vendoremail,vendoraddress,vendorphone)
values ($1,$2,$3,$4,$5)`;