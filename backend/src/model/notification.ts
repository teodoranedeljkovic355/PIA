import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Notification = new Schema({
 text: {
     type: String
 },
 date: {
     type: Date
 },
 title: {
     type: String
 },
 subjects : {
     type: Array
 },
 picture: {
     type: String
 },
 username:{
 type: String
 },
 url:{
     type: String
 },
 flagD:{
     type:Number
 }
})

export default mongoose.model('Notification', Notification, 'notifications');