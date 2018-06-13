const express = require("express");
const workoutRouter = express.Router();
const WorkoutModel = require("../models/workout");

workoutRouter.route("/")
    .get((req, res) => {
        WorkoutModel.find(req.query, (err, foundWorkout) => {
            if (err) res.send(err);
            else res.status(200).send(foundWorkout);
        })
    })
    .post((req, res) => {
        const newWorkout = new WorkoutModel(req.body);
        newWorkout.save((err, addedWorkout) => {
            if (err) res.send(err);
            else res.status(201).send(addedWorkout);
        })
    })

workoutRouter.route("/:id")
    .get((req, res) => {
        WorkoutModel.findOne({ _id: req.params.id }, (err, foundWorkout) => {
            if (err) return res.send(err);
            if (!foundWorkout) return res.status(404).send({ message: "workout not found" });
            res.status(200).send(foundWorkout);
        })
    })
    .delete((req, res) => {
        WorkoutModel.findOneAndRemove({ _id: req.params.id }, (err, deletedWorkout) => {
            if (err) return res.send(err);
            if (!deletedWorkout) return res.status(404).send({ message: "workout not found" });
            res.status(200).send(`${deletedWorkout.name} was deleted`);
        })
    })
    .put((req, res) => {
        WorkoutModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedWorkout) => {
            if (err) return res.send(err);
            if (!updatedWorkout) return res.status(404).send({ message: "workout not found" });
            res.status(200).send(updatedWorkout);
        })
    })

module.exports = workoutRouter;