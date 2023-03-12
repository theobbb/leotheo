import {Schema, model, models} from 'mongoose';

const teamSchema = new Schema({
    name: String,
    users: [],
});

const Team = models.Team || model('Team', teamSchema);

export default Team;