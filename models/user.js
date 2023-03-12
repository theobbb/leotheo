import {Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = models.User || model('User', userSchema);
