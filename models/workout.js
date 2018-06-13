const mongoose = require("mongoose");

const {Schema} = mongoose;

const workoutSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    type: String,
    targets: String,
    videoUrl: String
},{timestamps: true});

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;