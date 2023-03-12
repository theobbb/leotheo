import connectDB from '../../../utils/connectDB';
import Product from '../../../models/productModel';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function createTest(req, res) {

    try {
        console.log('connecting to DB...');
        await connectDB();
        console.log('connected to DB');

        console.log('creating document');
        const test = await Product.create(req.body);
        console.log('document created');

        res.json({ test });
    } catch (error) {
        console.log(error);
        res.json({error});
    }

}