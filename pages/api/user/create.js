import connectDB from '../../../utils/connectDB';
import User from '../../../models/user';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function createUser(req, res) {

    try {
        console.log('connecting to DB...');
        await connectDB();
        console.log('connected to DB');

        console.log('creating document');
        const test = await User.create(req.body);
        console.log('document created');

        res.json({ test });
    } catch (error) {
        console.log(error);
        res.json({error});
    }

}