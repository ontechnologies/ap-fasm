import pool from './db';

export const createUserTable =() => {
    const query =
    `CREATE TABLE IF NOT EXISTS users
    (
    userid uuid primary key,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    role varchar(9),
    department varchar(5),
    email varchar(30) unique not null,
    username varchar(30) not null,
    password varchar(15) not null,
    created_on timestamp,
    modified_on timestamp
    );`
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end();
    }catch(e){
        console.log(e);
        await pool.end
    }
};

export const createAssetTable =() => {
    const query =
    `CREATE TABLE IF NOT EXISTS assets
    (
        assetid int primary key,
        assetname varchar(30) not null,
        aquistiondate timestamp,
        assetprice real,
        assetvendor uuid references vendor(vendorid),
        assetgroup uuid references assetGroup(groupid),
        recordedon timestamp,
        recorder uuid references users(userid),
        category varchar(15)
    );`
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end();
    }catch(e){
        console.log(e);
        await pool.end();
    }
};

export const createVendorTable =() => {
    const query =
    `CREATE TABLE IF NOT EXISTS vendor
    (
        vendorid uuid primary key,
        vendorname varchar(30) not null,
        vendoremail varchar(30) not null,
        vendoraddress varchar(225),
        vendorphone varchar(15)
    );`
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end();
    }catch(e){
        console.log(e);
        await pool.end();
    }
};

export const createAssetGroupTable =() => {
    const query =
    `CREATE TABELE IF NOT EXISTS assetGroup
    (
        groupid uuid primary key,
        groupname varchar(30) not null,
        assetdepreciation real,
        assetlifespan int
    );`
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end();
    }catch(e){
        console.log(e);
        await pool.end();
    }
};

export const createAllTables = async() => {
    await createUserTable();
    await createVendorTable();
    await createAssetGroupTable();
    await createAssetTable();
};


export const dropUserTable =() => {
    const query = `DROP TABLE IF EXISTS users returning *`;
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end()
    }catch(e){
        console.log(e);
        pool.end();
    }
};
export const dropAssetTable =() => {
    const query = `DROP TABLE IF EXISTS assets returning *`;
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end()
    }catch(e){
        console.log(e);
        pool.end();
    }
};

export const dropVendorTable =() => {
    const query = `DROP TABLE IF EXISTS vendor returning *`;
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end()
    }catch(e){
        console.log(e);
        pool.end();
    }
}

export const dropAssetGroupTable =() => {
    const query = `DROP TABLE IF EXISTS assetGroup returning *`;
    try{
        const response = await pool.query(query);
        console.log(response);
        await pool.end()
    }catch(e){
        console.log(e);
        pool.end();
    }
};

export const dropAllTables =() => {
    dropUserTable();
    dropVendorTable();
    dropAssetGroupTable();
    dropAssetTable();
}

pool.on('remove', () => {
    console.log('Client removed');
    process.exit(0);
});