const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
    title: {
        type: String,
        required: true,
    },
    slogan: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    services:{
        type: [String],
    },
    skills: [
        {
            JavasScript:{
                type: Number,
            },
            ReactJs:{
                type: Number,
            },
            NodeJs:{
                type: Number,
            },
            Redux:{
                type: Number,
            }
        }
    ],
    education: [
        {
          school: {
            type: String,
            required: true
          },
          fieldofstudy: {
            type: String,
            required: true
          },
          from: {
            type: Date,
            required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },
          description: {
            type: String
          }
        }
    ],
    experience: [
        {
          title: {
            type: String,
            required: true
          },
          company: {
            type: String,
            required: true
          },
          location: {
            type: String
          },
          from: {
            type: Date,
            required: true
          },
          to: {
            type: Date
          },
          current: {
            type: Boolean,
            default: false
          },
          description: {
            type: String
          }
        }
      ],
})

var Profile = new mongoose.model('Profile', ProfileSchema);
module.exports = Profile;