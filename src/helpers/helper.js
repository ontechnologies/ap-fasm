import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Helper {
    static HashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
    }

    static comparePassword(hashPassword, password){
        return bcrypt.compareSync(password, hashPassword);
    }

    static generateAuthToken(user){
        const token = jwt.sign({
            userId: user.userId,
            username: user.username,
            userrole: user.role
        }, process.env.JWT_SECRET_KEY, { expiresIn: '1d'});
        return token;
    }
    static isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }
}
export default Helper;
