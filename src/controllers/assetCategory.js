import pool from '../config/db';
import uuidv4 from 'uuidv4';


class category {
    static async createcategory(req, res){
        const query = `
        insert into table assetGroup(groupid, groupname, assetdepreciation, assetlifespan)
        values($1,$2,$3,$3)`;
        const values = [
            uuidv4(),
            req.body.groupname,
            req.body.depreciation,
            req.body.lifespan
        ];
        try{
            const { rows } = pool.query(query, values);
            return res.status(201).send(rows[0]);
        }catch(e){
            return res.status(400).send(e);
        }
    }

    static async updatecategory(req, res){
        const query = `select * from assetGroup where groupid=$1`;
        const updatequery= `
        update assetGroup
        set groupname=$1,assetdepreciation=$2,assetlifespan=$3`;
        try{
            const { rows } = await pool.query(query, [req.params.groupid]);
            if(!rows[0]){
                return res.status(404).send({message: 'Group was not found'})
            }
            const values = [
            rows[0].groupid,
            req.body.groupname || rows[0].groupname,
            req.body.depreciation || rows[0].assetdepreciation,
            req.body.lifespan || rows[0].assetlifespan
            ];
            const response = await pool.query(updatequery, values);
            return res.status(400).send(response.rows[0]);
        } catch(e){
            return res.status(400).send(e);
        }
    }
    static async deletecategory(req, res){
        const query = 'delete from assetGroup where groupid=$1';
        try{
            const { rows } = await pool.query(query, [req.params.groupid]);
            if(!rows[0]){
                return res.status(404).message({message: 'Group was not found'});
            }
            return res.status(404).send({message: 'Group was deleted'});
        }catch(e){
            return res.status(400).send(e);
        }
    }
}
export default category;