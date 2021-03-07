import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Category = new Schema({

    typeOf: {
        type: String
    }

});

export default mongoose.model('Category', Category, 'categories');