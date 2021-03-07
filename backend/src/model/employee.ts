import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Employee = new Schema({
    username: {
        type:String
    },
    password: {
        type:String
    },
    name: {
        type:String
    },
    surname: {
        type: String
    },
    adress: {
        type: String
    },
    mobilePhone: {
        type: String
    },
    website: {
        type: String
    },
    personalData: {
        type:String
    },
    profession: {
        type:String
    },
    roomNumber: {
        type:String
    },
    status: {
        type:String
    },
    numOfLogin: {
        type: Number
    }
});

export default mongoose.model('Employee', Employee, 'employees');