const express = require('express');
const studentRoute = express.Router();

// Student model
const StudentModel = require('../models/Student');
const SubjectModel = require('../models/subject');
const UserModel = require('../models/user');
const HistoryModel = require('../models/history');

// Get all data
studentRoute.route('/').get((req, res, next) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Create student data
studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// Edit student data
studentRoute.route('/edit-student/:id').get((req, res, next) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
studentRoute.route('/update-student/:id').put((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student successfully updated');
        }
    })
})

// Delete student data
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
    StudentModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

// CREATE USER
studentRoute.route('/create-user').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// GET USER
studentRoute.route('/show-user').get((req, res, next) => {
    UserModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// CREATE HISTORY
studentRoute.route('/create-history').post((req, res, next) => {
    HistoryModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// GET HISTORY
studentRoute.route('/show-history').get((req, res, next) => {
    HistoryModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Show Subject
studentRoute.route('/show-student').get((req, res, next) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Show Subject
studentRoute.route('/show-subject').get((req, res, next) => {
    SubjectModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// CREATE Subject
studentRoute.route('/create-subject').post((req, res, next) => {
    SubjectModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Edit student data
studentRoute.route('/edit-subject/:id').get((req, res, next) => {
    SubjectModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
})

// Update student data
studentRoute.route('/update-subject/:id').put((req, res, next) => {
    SubjectModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Subject successfully updated');
        }
    })
})

// Delete student data
studentRoute.route('/delete-subject/:id').delete((req, res, next) => {
    SubjectModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = studentRoute;