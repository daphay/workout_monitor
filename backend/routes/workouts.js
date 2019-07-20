const router = require("express").Router();
const Workout = require("../models/workout.model");

//Root Route
router.route("/").get((req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json("Error : " + err));
});

//Create Route
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newWorkout = new Workout({
    username,
    description,
    duration,
    date
  });

  newWorkout
    .save()
    .then(() => res.json("Workout Scheduled"))
    .catch(err => res.status(400).json("Error : " + err));
});

//Read Route
router.route("/:id").get((req, res) => {
  Workout.findById(req.params.id)
  .then(workout => res.json(workout))
  .catch(err => res.status(400).json("Error : " + err));
});

//Update Route
router.route("/update/:id").post((req, res) => {
  Workout.findById(req.params.id)
  .then(workout => {
      workout.username = req.body.username;
      workout.description = req.body.description;
      workout.duration = Number(req.body.duration);
      workout.date = Date.parse(req.body.date)
     
      workout.save()
      .then(workout => res.json("Workout Updated"))
      .catch( err => res.status(400).json("Error : " + err))
    })
      .catch(err => res.status(400).json("Error : " + err));
});

//Delete Route
router.route("/:id").delete((req, res) =>{
  Workout.findByIdAndDelete(req.params.id)
  .then(workout => res.json("Workout successfully deleted"))
  .catch(err => res.status(400).json("Error : " + err));
});

module.exports = router;
