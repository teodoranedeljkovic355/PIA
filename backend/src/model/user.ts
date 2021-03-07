import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type:String,
        unique: true
    },
    password: {
        type:String
    },
   index: {
        type: String
    },
    studiesType: {
        type:String
    },
    name: {
        type:String
    },
    surname: {
        type: String
    },
    status: {
        type:String
    },
    numOfLogin: {
        type: Number
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
    picture: {
        type:String
    },
    employeeFlag: {
        type: Number
    },
    typeOf:{
        type: String
    },
    subjects: {
        type: Array
    },
    mail: {
        type: String
    }
});

export default mongoose.model('User', User, 'users');