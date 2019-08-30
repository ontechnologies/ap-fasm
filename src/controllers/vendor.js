import pool from '../config/db';
import Helper from '../helpers/helper';
import uuidv4 from 'uuidv4';


class vendor{
    static async createVendor(req, res){
        if(!Helper.isValidEmail(req.body.vendoremail)){
           return res.status(400).send({message:'Invalid Email'});
        }
        const query = `insert into vendors(vendorid, vendorname, vendoremail, vendoraddress, vendorphone)
        values($1,$2,$3,$4,$5)`;
        const values = [
            uuidv4(),
            req.body.vendorname,
            req.body.vendoremail,
            req.body.vendoraddress,
            req.body.vendorphone
        ];
        try{
            const { rows } = await pool.query(query, values);
            return res.status(201).send({vendor: rows[0] });
        }catch(e){
            return res.status(400).send(e)
        }
    }
    static async delete(req, res){
        const query = `delete from vendors where vendorid=$1`;
        try{
            const {rows} = await pool.query(query, [req.params.vendorid]);
            if(!rows[0]){
                return res.status(404).send({message: 'Vendor not found'})
            }
            return res.status(204).send({ 'message': 'deleted' });
        }catch(e){
            return res.status(400).send(error);
        }
    }
    static async updateVendor(req, res){
        const query =`select * from vendors where vendorid=$1`
        const updatequery = `update vendors
        set vendorname=$1, vendoremail=$2, vendoraddress=$3, vendorphone=$4 where
        vendorid=$1`;
        if(!Helper.isValidEmail(req.body.vendoremail)){
            return res.status(400).send({message:'Invalid Email'});
         }
         try{
             const { rows } = await pool.query(query, [req.body.vendorid]);
             if(!rows[0]){
                 return res.status(404).send({'message': 'vendor not found'});
             }
             const values =[
                rows[0].vendorid,
                req.body.vendorname || rows[0].vendorname,
                req.body.vendoremail || rows[0].vendoremail,
                req.body.vendoraddress || rows[0].vendoraddress,
                req.body.vendorphone || rows[0].vendorphone
             ];
             const response = await pool.query(updatequery, values);
             return res.status(200).send(response.rows[0]);
         }catch(e){
            return res.status(400).send(e);
         }
    }
}

export default vendor;