import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Notice = new Schema({

    typeOf: {
        type: String
    },
    noticesText: {
        type:String
    },
    date:{
        type: Date
    }

});

export default mongoose.model('Notice', Notice, 'notices');