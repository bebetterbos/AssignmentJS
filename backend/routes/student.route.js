const express = require('express');
const studentRoute = express.Router();

let StudentModel = require('../models/Student');

studentRoute.route('/').get((req, res, next) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }

    })
})

//Edit
studentRoute.route('/edit-student/:id').post((req, res, next) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }

    })
})

//update
studentRoute.route('/update-student/:id').put((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Student Successfully Update');
        }
    })
})

//delete
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
    StudentModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentRoute;