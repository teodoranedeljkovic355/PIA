"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./model/user"));
const subject_1 = __importDefault(require("./model/subject"));
const notification_1 = __importDefault(require("./model/notification"));
const category_1 = __importDefault(require("./model/category"));
const notice_1 = __importDefault(require("./model/notice"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/mydb');
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
router.route('/login').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let typeOf = req.body.typeOf;
    user_1.default.findOne({ 'username': username, 'password': password, 'typeOf': typeOf }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else
            res.json(user);
    });
});
router.route('/register').post((req, res) => {
    let u = new user_1.default(req.body);
    u.save().then(u => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/registerStudent').post((req, res) => {
    let u = new user_1.default(req.body);
    u.save().then(u => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/registerEmployee').post((req, res) => {
    let u = new user_1.default(req.body);
    u.save().then(u => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/addSubject').post((req, res) => {
    console.log(req.body);
    let s = new subject_1.default(req.body);
    s.save().then(s => {
        res.status(200).json({ 'subject': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'subject': 'no' });
    });
});
router.route('/getSubjectByCode').post((req, res) => {
    let subjectCode = req.body.subjectCode;
    console.log(subjectCode);
    subject_1.default.findOne({ "subjectCode": subjectCode }, (err, subject) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subject);
            console.log(subject);
        }
    });
});
router.route('/getSubjectByName').post((req, res) => {
    let name = req.body.name;
    let subjectCode = req.body.subjectCode;
    subject_1.default.findOne({ "name": name, "subjectCode": { $ne: subjectCode } }, (err, subject) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subject);
            console.log(subject);
        }
    });
});
router.route('/getpass').post((req, res) => {
    let kor_ime = req.body.kor_ime;
    user_1.default.findOne({ "username": kor_ime }, (err, ob) => {
        if (ob) {
            res.json({ 'pass': ob.get('password') });
        }
    });
});
router.route('/change').post((req, res) => {
    let username = req.body.username;
    let newPass = req.body.newPass;
    console.log(username);
    console.log(newPass);
    user_1.default.collection.updateOne({ 'username': username }, { $set: { "password": newPass } });
    user_1.default.collection.updateOne({ 'username': username }, { $set: { "numOfLogin": 1 } });
    res.json({ 'por': 'ok' });
});
router.route('/getAllStaff').get((req, res) => {
    user_1.default.find({ employeeFlag: 1 }, (err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
});
router.route('/getAllStudents').get((req, res) => {
    user_1.default.find({ employeeFlag: 0 }, (err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
});
router.route('/get1SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 1, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get2SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 2, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get3SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 3, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get4SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 4, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get5SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 5, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get6SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 6, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get7SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 7, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get8SemesterSub').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 8, department: "RTI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get1SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 1, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get2SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 2, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get3SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 3, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get4SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 4, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get5SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 5, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get6SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 6, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get7SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 7, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get8SemesterSi').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 8, department: "SI" }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get1SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 1, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get2SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 2, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get3SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 3, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get4SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 4, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get5SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 5, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get6SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 6, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get7SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 7, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/get8SemesterElse').get((req, res) => {
    subject_1.default.find({ master: 0, semester: 8, department: { $nin: ["SI", "RTI"] } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
router.route('/getMaster').get((req, res) => {
    subject_1.default.find({ master: 1 }, null, { sort: { 'semester': 'asc' } }, (err, subjects) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subjects);
        }
    });
});
var multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/pictures');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage: storage
});
router.post('/upload', upload.single('file'), (req, res) => {
    const filename = req.file.filename;
    const path = req.file.path;
    res.json({ 'message': 'File uploaded' });
});
router.route('/getProfilePicture/:image').get((req, res) => {
    var path = require('path');
    var image = req.params.image;
    console.log(image);
    res.sendFile(path.resolve('./src/pictures/' + image));
});
router.route('/getFile/:image').get((req, res) => {
    var path = require('path');
    var image = req.params.image;
    console.log(image);
    res.sendFile(path.resolve('./src/pictures/' + image));
});
router.route('/getSubjectInfo').post((req, res) => {
    let name = req.body.name;
    subject_1.default.findOne({ "name": name }, (err, subject) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(subject);
        }
    });
});
router.route('/findThoseFromLastWeek').get((req, res) => {
    var lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    notification_1.default.find({ "date": { $gte: lastWeek } }, (err, notifications) => {
        if (err)
            console.log(err);
        else {
            console.log(notifications);
            res.json(notifications);
        }
    });
});
router.route('/getNotifications/:name').get((req, res) => {
    let name = req.params.name;
    console.log(name);
    notification_1.default.find({ "subjects": name }, null, { sort: { 'date': 'desc' } }, (err, notifications) => {
        if (err) {
            console.log(err);
        }
        else
            res.json(notifications);
        console.log("ovo");
        console.log(notifications);
    });
});
router.route('/changeFile').post((req, res) => {
    let title = req.body.title;
    let newPicture = req.body.picture;
    notification_1.default.collection.updateOne({ "title": title }, { $set: { "picture": newPicture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeText').post((req, res) => {
    let title = req.body.title;
    let newText = req.body.newText;
    notification_1.default.collection.updateOne({ "title": title }, { $set: { "text": newText } });
    res.json({ 'poruka': 'OK' });
});
router.route('/addStudentToSubjects').post((req, res) => {
    let chosenStudent = req.body.chosenStudent;
    let chosenSubjects = req.body.chosenSubjects;
    user_1.default.collection.updateOne({ "username": chosenStudent }, { $set: { "subjects": chosenSubjects } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeSubjects').post((req, res) => {
    let title = req.body.title;
    let newSubjects = req.body.newSubjects;
    notification_1.default.collection.updateOne({ "title": title }, { $set: { "subjects": newSubjects } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeTitle').post((req, res) => {
    let title = req.body.title;
    let newTitle = req.body.newTitle;
    notification_1.default.collection.updateOne({ "title": title }, { $set: { "title": newTitle } });
    res.json({ 'poruka': 'OK' });
    console.log(newTitle);
});
router.route('/findNewsUpdated').post((req, res) => {
    let title = req.body.title;
    notification_1.default.findOne({ 'title': title }, (err, news) => {
        if (err) {
            console.log(err);
        }
        else
            res.json(news);
    });
});
router.route('/updateInfo').post((req, res) => {
    let username = req.body.username;
    let newAdress = req.body.newAdress;
    user_1.default.collection.updateOne({ 'username': username }, { $set: { "adress": newAdress } });
    res.json({ 'poruka': 'OK' });
    console.log(newAdress);
});
router.route('/updateMobile').post((req, res) => {
    let username = req.body.username;
    let newMobile = req.body.newMobile;
    user_1.default.collection.updateOne({ 'username': username }, { $set: { "mobilePhone": newMobile } });
    res.json({ 'poruka': 'OK' });
    console.log(newMobile);
});
router.route('/updatePersonalData').post((req, res) => {
    let username = req.body.username;
    let newPersonalData = req.body.newPersonalData;
    user_1.default.collection.updateOne({ 'username': username }, { $set: { "personalData": newPersonalData } });
    res.json({ 'poruka': 'OK' });
    console.log(newPersonalData);
});
router.route('/updateRoomNumber').post((req, res) => {
    let username = req.body.username;
    let newRoomNumber = req.body.newRoomNumber;
    user_1.default.collection.updateOne({ 'username': username }, { $set: { "roomNumber": newRoomNumber } });
    res.json({ 'poruka': 'OK' });
});
router.route('/findOneUpdated').post((req, res) => {
    let username = req.body.username;
    user_1.default.findOne({ 'username': username }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else
            res.json(user);
    });
});
router.route('/addNews').post((req, res) => {
    let t = req.body.title;
    console.log("body requesta je: ");
    console.log(req.body);
    let subjects = req.body.subjects;
    let n = new notification_1.default(req.body);
    n.save().then(n => {
        res.status(200).json({ 'notification': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'notification': 'no' });
    });
});
router.route('/addNewsWithMoreFiles').post((req, res) => {
    let title = req.body.title;
    let restFiles = req.body.restFiles;
    notification_1.default.collection.updateOne({ "title": title }, { $push: { "picture": restFiles } });
});
router.route('/getNewsBySubjectName/:nn').get((req, res) => {
    let myName = req.params.nn;
    console.log("Parametri:");
    console.log(req.params.nn);
    notification_1.default.find({ "subjects": myName }, (err, notifications) => {
        if (err)
            console.log(err);
        else {
            console.log(notifications);
            res.json(notifications);
        }
    });
});
router.route('/deleteMyNews').post((req, res) => {
    let news = req.body.news;
    let title = news.title;
    notification_1.default.findOneAndRemove({ "title": title }, (err, poruka) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ 'poruka': 'ok' });
        }
    });
});
router.route('/findEmployee').post((req, res) => {
    let username = req.body.username;
    user_1.default.find({ "username": username }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/getAllSubjects').get((req, res) => {
    subject_1.default.find({}, (err, subjects) => {
        if (err)
            console.log(err);
        else
            return res.json(subjects);
        console.log(subjects);
    });
});
// STA JE BRE OVO
router.route('/attachPicturesExcercises').post((req, res) => {
    let picture = req.body.picture;
    let subjectCode = req.body.subjectCode;
    subject_1.default.collection.updateOne({ "subjectCode": subjectCode }, { $set: { "v": picture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/attachPicturesLectures').post((req, res) => {
    let picture = req.body.picture;
    let subjectCode = req.body.subjectCode;
    subject_1.default.collection.updateOne({ "subjectCode": subjectCode }, { $set: { "p": picture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/attachPicturesExamQ').post((req, res) => {
    let picture = req.body.picture;
    let subjectCode = req.body.subjectCode;
    subject_1.default.collection.updateOne({ "subjectCode": subjectCode }, { $set: { "eq": picture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/attachPicturesLaboratory').post((req, res) => {
    let picture = req.body.picture;
    let subjectCode = req.body.subjectCode;
    subject_1.default.collection.updateOne({ "subjectCode": subjectCode }, { $set: { "l": picture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/uploadComment').post((req, res) => {
    let subjectCode = req.body.subjectCode;
    let comment = req.body.comment;
    subject_1.default.collection.updateOne({ "subjectCode": subjectCode }, { $set: { "comment": comment } });
    res.json({ "poruka": "OK" });
});
router.route('/changeUsername').post((req, res) => {
    let username = req.body.username;
    let newUsername = req.body.newUsername;
    user_1.default.collection.updateOne({ "username": username }, { $set: { "username": newUsername } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changePassword').post((req, res) => {
    let password = req.body.password;
    let newPassword = req.body.newPassword;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "password": password, "username": username }, { $set: { "password": newPassword } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeSurname').post((req, res) => {
    let surname = req.body.surname;
    let newSurname = req.body.newSurname;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "surname": surname, "username": username }, { $set: { "surname": newSurname } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeName').post((req, res) => {
    let name = req.body.name;
    let newName = req.body.newName;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "name": name, "username": username }, { $set: { "name": newName } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeAdress').post((req, res) => {
    let adress = req.body.adress;
    let newAdress = req.body.newAdress;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "adress": adress, "username": username }, { $set: { "adress": newAdress } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeWebsite').post((req, res) => {
    let website = req.body.website;
    let newWebsite = req.body.newWebsite;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "website": website, "username": username }, { $set: { "website": newWebsite } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeMobile').post((req, res) => {
    let mobilePhone = req.body.mobilePhone;
    let newMobile = req.body.newMobile;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "mobilePhone": mobilePhone, "username": username }, { $set: { "mobilePhone": newMobile } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changePersonalData').post((req, res) => {
    let personalData = req.body.personalData;
    let newPersonalData = req.body.newPersonalData;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "personalData": personalData, "username": username }, { $set: { "personalData": newPersonalData } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeProfession').post((req, res) => {
    let profession = req.body.profession;
    let newProfession = req.body.newProfession;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "profession": profession, "username": username }, { $set: { "profession": newProfession } });
    res.json({ 'poruka': 'OK' });
    console.log(newProfession);
});
router.route('/changeRoomNumber').post((req, res) => {
    let roomNumber = req.body.roomNumber;
    let newRoomNumber = req.body.newRoomNumber;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "roomNumber": roomNumber, "username": username }, { $set: { "roomNumber": newRoomNumber } });
    res.json({ 'poruka': 'OK' });
});
router.route('/findUsersUpdated').post((req, res) => {
    let username = req.body.username;
    user_1.default.findOne({ 'username': username }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else
            res.json(user);
    });
});
router.route('/changePictureNews').post((req, res) => {
    let title = req.body.title;
    let newPicture = req.body.picture;
    notification_1.default.collection.updateOne({ "title": title }, { $set: { "picture": newPicture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changePicture').post((req, res) => {
    let username = req.body.username;
    let newPicture = req.body.picture;
    user_1.default.collection.updateOne({ "username": username }, { $set: { "picture": newPicture } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeSubjectsForProf').post((req, res) => {
    let username = req.body.username;
    let newSubjects = req.body.newSubjects;
    user_1.default.collection.updateOne({ "username": username }, { $set: { "subjects": newSubjects } });
    res.json({ 'poruka': 'OK' });
});
router.route('/deleteStudent').post((req, res) => {
    let username = req.body.username;
    user_1.default.collection.findOneAndDelete({ "username": username });
    res.json({ 'poruka': 'ok' });
});
router.route('/deleteSubject').post((req, res) => {
    let subjectCode = req.body.subjectCode;
    subject_1.default.collection.findOneAndDelete({ "subjectCode": subjectCode });
    res.json({ 'poruka': 'ok' });
});
router.route('/deleteEmployee').post((req, res) => {
    let username = req.body.username;
    user_1.default.collection.findOneAndDelete({ "username": username });
    res.json({ 'poruka': 'ok' });
});
router.route('/changeIndex').post((req, res) => {
    let newIndexS = req.body.newIndexS;
    let index = req.body.index;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "username": username, "index": index }, { $set: { "index": newIndexS } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeStatus').post((req, res) => {
    let newStatus = req.body.newStatus;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "username": username }, { $set: { "status": newStatus } });
    res.json({ 'poruka': 'OK' });
});
router.route('/changeStudiesType').post((req, res) => {
    let newStudiesType = req.body.newStudiesType;
    let username = req.body.username;
    user_1.default.collection.updateOne({ "username": username }, { $set: { "studiesType": newStudiesType } });
    res.json({ 'poruka': 'OK' });
});
router.route('/updateSubject').post((req, res) => {
    let oldSubjectCode = req.body.oldSubjectCode;
    let newNameOfSubject = req.body.newNameOfSubject;
    let newTypeOfSubject = req.body.newTypeOfSubject;
    let newYearOfStudies = req.body.newYearOfStudies;
    let newDepartment = req.body.newDepartment;
    let newSubjectCode = req.body.newSubjectCode;
    let newClassesFond = req.body.newClassesFond;
    let newNumberOfPoints = req.body.newNumberOfPoints;
    let newGoalOfSubject = req.body.newGoalOfSubject;
    let newOutcomeOfSubject = req.body.newOutcomeOfSubject;
    let newExcerciseTerm = req.body.newExcerciseTerm;
    let newLectureTerm = req.body.newLectureTerm;
    let newPropositions = req.body.newPropositions;
    let newLabaratory = req.body.newLaboratory;
    let newSemester = req.body.newSemester;
    let newMaster = req.body.newMaster;
    subject_1.default.collection.updateOne({ "subjectCode": oldSubjectCode }, { $set: { "subjectCode": newSubjectCode, "name": newNameOfSubject, "typeOfSubject": newTypeOfSubject, "yearOfStudies": newYearOfStudies,
            "department": newDepartment, "classesFond": newClassesFond, "numberOfPoints": newNumberOfPoints, "goalOfSubject": newGoalOfSubject,
            "outcomeOfSubject": newOutcomeOfSubject, "excerciseTerm": newExcerciseTerm, "lectureTerm": newLectureTerm, "propositions": newPropositions, "laboratory": newLabaratory, "semester": newSemester,
            "master": newMaster } });
    res.json({ 'poruka': 1 });
});
router.route('/updateStudent').post((req, res) => {
    console.log(req.body);
    let oldUsernameS = req.body.oldUsernameS;
    let newUsernameS = req.body.newUsernameS;
    let newNameS = req.body.newNameS;
    let newSurnameS = req.body.newSurnameS;
    let newPasswordS = req.body.newPasswordS;
    let newIndexS = req.body.newIndexS;
    let newStatusS = req.body.newStatusS;
    let newStudiesTypeS = req.body.newStudiesTypeS;
    user_1.default.collection.updateOne({ "username": oldUsernameS }, { $set: { "username": newUsernameS, "name": newNameS, "surname": newSurnameS, "password": newPasswordS, "index": newIndexS, "studiesType": newStudiesTypeS, "status": newStatusS } });
    res.json({ 'poruka': 1 });
});
router.route('/updateEmployee').post((req, res) => {
    console.log(req.body);
    let oldUsername = req.body.oldUsername;
    let newUsername = req.body.newUsername;
    let newName = req.body.newName;
    let newSurname = req.body.newSurname;
    let newPassword = req.body.newPassword;
    let newMobile = req.body.newMobile;
    let newWebsite = req.body.newWebsite;
    let newPersonalData = req.body.newPersonalData;
    let newAdress = req.body.newAdress;
    let newRoomNumber = req.body.newRoomNumber;
    let newProfession = req.body.newProfession;
    let newStatus = req.body.newStatus;
    let newSubjects = req.body.newSubjects;
    user_1.default.collection.updateOne({ "username": oldUsername }, { $set: { "username": newUsername, "name": newName, "surname": newSurname, "password": newPassword, "mobilePhone": newMobile, "adress": newAdress, "website": newWebsite, "personalData": newPersonalData, "profession": newProfession, "roomNumber": newRoomNumber, "status": newStatus, "subjects": newSubjects } });
    res.json({ 'poruka': 1 });
});
router.route('/changeUserData').post((req, res) => {
    let username = req.body.username;
    let newAdress = req.body.newAdress;
    let newPersonalData = req.body.newPersonalData;
    let newMobile = req.body.newMobile;
    let newRoomNumber = req.body.newRoomNumber;
    user_1.default.collection.updateOne({ "username": username }, { $set: { "adress": newAdress, "mobilePhone": newMobile, "roomNumber": newRoomNumber, "personalData": newPersonalData } });
    res.json({ 'poruka': 1 });
});
router.route('/changeNewsData').post((req, res) => {
    let oldTitle = req.body.oldTitle;
    let newTitle = req.body.newTitle;
    let newText = req.body.newText;
    let newSubjects = req.body.newSubjects;
    notification_1.default.collection.updateOne({ "title": oldTitle }, { $set: { "title": newTitle, "text": newText, "subjects": newSubjects } });
    res.json({ 'poruka': 1 });
});
router.route('/addNewCategory').post((req, res) => {
    let c = new category_1.default(req.body);
    c.save().then(c => {
        res.status(200).json({ 'category': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'category': 'no' });
    });
});
router.route('/getAllCategories').get((req, res) => {
    category_1.default.find({}, (err, categories) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(categories);
        }
    });
});
router.route('/deleteCategory').post((req, res) => {
    let typeOf = req.body.typeOf;
    category_1.default.findOneAndRemove({ "typeOf": typeOf }, (err, poruka) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ 'poruka': 'ok' });
        }
    });
});
router.route('/updateCategory').post((req, res) => {
    let typeOf = req.body.typeOf;
    let newCategory = req.body.newCategory;
    category_1.default.collection.updateOne({ 'typeOf': typeOf }, { $set: { "typeOf": newCategory } });
    res.json({ 'por': 'ok' });
});
router.route('/addNewNotice').post((req, res) => {
    let c = new notice_1.default(req.body);
    c.save().then(c => {
        res.status(200).json({ 'notice': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'notice': 'no' });
    });
});
router.route('/getAllNotices').get((req, res) => {
    notice_1.default.find({}, (err, notices) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(notices);
        }
    });
});
router.route('/deleteNotice').post((req, res) => {
    let typeOf = req.body.typeOf;
    let noticesText = req.body.noticesText;
    notice_1.default.findOneAndRemove({ "typeOf": typeOf, "noticesText": noticesText }, (err, poruka) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({ 'poruka': 'ok' });
        }
    });
});
router.route('/getUpdatingNotice').post((req, res) => {
    let typeOf = req.body.typeOf;
    let noticesText = req.body.noticesText;
    notice_1.default.findOne({ "typeOf": typeOf, "noticesText": noticesText }, (err, notice) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(notice);
            console.log(notice);
        }
    });
});
router.route('/getAllNotices30Days').get((req, res) => {
    var lastMonth = new Date();
    lastMonth.setDate(lastMonth.getDate() - 90);
    notice_1.default.find({ "date": { $gte: lastMonth } }, (err, notices) => {
        if (err)
            console.log(err);
        else {
            console.log(notices);
            res.json(notices);
        }
    });
});
// router.route('/updateNotice').post((req, res)=>{
//     let typeOf = req.body.typeOf;
//     let newTypeOf = req.body.newTypeOf;
//     let noticesText = req.body.noticesText;
//     let newNoticesText = req.body.newNoticesText;
//     notice.collection.updateOne({'typeOf':typeOf, 'noticesText':noticesText},{$set: {"typeOf": newTypeOf, "noticesText": newNoticesText}});
//     res.json({'poruka':1});
// })
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map