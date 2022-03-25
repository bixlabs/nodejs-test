const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Service = require('../src/models/service.model');

dotenv.config({ path: path.join(__dirname, '../.env') });

const data = [
  {
    code: 'career_coaching',
    serviceName: 'Career Coaching',
    detail:
      'The aim of career coaching is to help you understand what you want, the skills you need and how you can develop. A career coach will support you in making these initial steps, setting you on your way to a more fulfilling working life',
    tiers: [
      {
        name: 'FREE FREE',
        price: 0,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
      {
        name: 'PRO',
        price: 1,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
      {
        name: 'ENTERPRISE (Enterprise)',
        price: 2,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
    ],
  },
  {
    code: 'resume_writing',
    serviceName: 'Resume Writing',
    detail:
      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    tiers: [
      {
        name: 'Free',
        price: 0,
        whatsIncluded: ['something', '2 GB of storage', 'Email support'],
      },
      {
        name: 'Pro',
        price: 50,
        whatsIncluded: ['10 users included'],
      },
      {
        name: 'Enterprise',
        price: 129,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
    ],
  },
  {
    code: 'linkedin_profile_update',
    serviceName: 'Linkedin Profile Update',
    detail:
      'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    tiers: [
      {
        name: 'Free',
        price: 0,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
      {
        name: 'Pro',
        price: 15,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
      {
        name: 'Enterprise',
        price: 29,
        whatsIncluded: ['10 users included', '2 GB of storage', 'Email support', 'Help center access'],
      },
    ],
  },
];

async function up() {
  await mongoose.connect(process.env.MONGODB_URL);
  return Service.insertMany(data);
}

async function down() {
  return Promise.resolve();
}

module.exports = { up, down };
