import {Schema, model, models} from 'mongoose';

const ProductStatSchema = new Schema({
    productID: String,
    yearlySalesTotal: Number,
    yearTotalSoldUnits: Number,
    year: Number,
    montlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,
        }
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number,
    }

}, {timestamps: true});

const ProductStat = models.ProductStat || model('ProductStat', ProductStatSchema);
export default ProductStat;