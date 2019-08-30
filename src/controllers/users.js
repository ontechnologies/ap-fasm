import moment from 'moment';
import uuidv4 from 'uuidv4';
import pool from '../config/db';
import Helper from '../helpers/helper';
import { createUser } from '../config/createRecords';
class  User {
    static async create(req, res){
        console.log(req.body);
        if(!req.body.username || !req.body.password){
            return res.status(400).send({message: 'Some fields are missing'});
        }
        if(!Helper.isValidEmail(req.body.email)){
            return res.status(400).send({message: 'Email is invalid'});
        }
        const hashedPassword = Helper.HashPassword(user.password);
        const values = [
            uuidv4(),
            req.body.firstname,
            req.body.lastname,
            req.body.role,
            req.body.department,
            req.body.email,
            req.body.username,
            hashedPassword,
            moment(new Date()),
            moment(new Date())
        ];
        try{
            const { rows } = await pool.Query(createUser, values);
            const user = rows[0];
            console.log(user);
            const token = Helper.generateAuthToken(user);
            return res.status(200).send({token: token})
        } catch (e) {
            return res.status(400).send(e);
        }
    }
    static async login(req, res){
        if (!req.body.username || !req.body.password) {
            return res.status(400).send({'message': 'Some values are missing'});
          }
          const query = 'select * from users where username = $1';
          try{
              const { rows } = await pool.Query(query, [req.body.username]);
              const user = rows[0];
              if(!user){
                return res.status(400).send({'message': 'The credentials you provided is incorrect'});
              }
              if(!Helper.comparePassword(user.password, req.body.password)){
                return res.status(400).send({'message': 'The credentials you provided is incorrect'});
              }
              const token = Helper.generateAuthToken(user);
              return res.status(200).send({ token });
          }catch(e){
            return res.status(400).send(error)
          }
    }
}

export default User;
