import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Subject = new Schema({
    name: {
        type:String
    },
    typeOfSubject :{
        type: String
    },
    yearOfStudies: {
        type: Number
    },
    department: {
        type: String
    },
    subjectCode: {
        type: String
    },
    classesFond: {
        type: Number
    },
    numberOfPoints: {
        type: Number
    },
    goalOfSubject: {
        type: String
    },
    outcomeOfSubject: {
        type:String
    },
    excerciseTerm: {
        type: String
    },
    lectureTerm: {
        type: String
    },
    propositions: {
        type: String
    },
    laboratory: {
        type: String
    },
    semester: {
        type: Number
    },
    master: {
        type: Number
    },
    v: {
        String
    },
    p:{
        type:String
    },
    l:{
        type:String
    },
    eq :{
        type: String
    },
    comment: {
        type:String
    },
    urlv:{
        type: String
    },
    urleq:{
        type: String
    },urll:{
        type: String
    },
    urlp:{
        type: String
    }
    
})

export default mongoose.model('Subject', Subject, 'subjects');