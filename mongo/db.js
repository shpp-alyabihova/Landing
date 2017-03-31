const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../configs/config.json')[env];

const logger = require('./../custom_modules/logger.js');
const pageContent = require('./../configs/page_content.js');


const landingSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    greeting: {
        en: {
            header: { type: String, required: true },
            text: [{ type: String }]
        },
        ru: {
            header: { type: String, required: true },
            text: [{ type: String }]
        },
    },
    about: {
        en: [{ type: String }],
        ru: [{ type: String }]
    },
    projects: [{
        img: { type: String },
        link: { type: String },
        git: { type: String, required: true },
        name: { type: String, required: true },
        description: {
            en: { type: String, required: true },
            ru: { type: String, required: true }
        },
        stack: [{ type: String }]
    }],
    crew: {
        about: {
            en: {
                header: { type: String, required: true },
                text: [{ type: String }]
            },
            ru: {
                header: { type: String, required: true },
                text: [{ type: String }]
            }
        },
        team: [{
            id: { type: String, required: true },
            cv_link: {type: String, required: true},
            name: {
                en: {type: String, required: true},
                ru: {type: String, required: true}
            },
            summary:  {
                en: {type: String, required: true},
                ru: {type: String, required: true}
            }
        }]
    }
});

const Landing = mongoose.model('LandingModel', landingSchema);

module.exports = {
    getLanding: (name)=> {
        return Landing
            .findOne({ name: name })
            .then((landing)=> {
                if (landing) {
                    return Promise.resolve(landing);
                } else {
                    return initDataBase(pageContent);
                }
            })
            .then((content)=> {
                return Promise.resolve(content);
            })
            .catch((err)=> {
                let errMessage = err && err.message;
                logger.error(`Error: ${errMessage}`);
                return Promise.reject(errMessage);
            })
    }
};

function initDataBase(initContent) {
    return new Landing(initContent).save()
        .then((content)=> {
            logger.info('Saved to data base init content');
            return Promise.resolve(content);
        })
        .catch((err)=> {
            return Promise.reject(err);
        })
}