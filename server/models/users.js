let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new Schema({
username: {
type: String,
default: '',
trim: true,
required: 'username is required'
 },
 password: {
    type: String,
    default: '',
    trim: true,
    required: 'password is required'
 },
 email: {
     type: String,
     default: '',
     trim: true,
     required: 'email is required'
 },
 displayName: {
    type: String,
    default: '',
    trim: true,
    required: 'display is required'
 },
 created: {
     type: Date,
     default: Date.now
 },
 updated: {
    type: Date,
    default: Date.now
}
},
{
    collection: "users"
});

let options = ({missingPasswordError: "Wrong Password"});

UserSchema.plugin(passportLocalMongoose, options);