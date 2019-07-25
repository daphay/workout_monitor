import React, { Component } from 'react';
import axios from "axios";
import Workout from "./workout.component";

export default class WorkoutList  extends Component {
    constructor(props){
        super(props);
        this.deleteWorkout = this.deleteWorkout.bind(this);
        this.state ={
            workouts: []
        }
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/workouts/")
             .then(res => {
                 this.setState({
                     workouts: res.data
                 })
              })
             .catch(err => console.log(err))
    }

    deleteWorkout(id){
        axios.delete("http://localhost:5000/workouts/" + id)
             .then(res => console.log(res.data))
                 this.setState({
                    workouts: this.state.workouts.filter(el => el.id !==id)
                 })
         window.location="/";        
             
    }
    
    workoutList(){
        return this.state.workouts.map(currentWorkout =>{
          return <Workout workout={currentWorkout} deleteWorkout={this.deleteWorkout} key={currentWorkout._id}/>
        });
    }

    render() {
        return (
            <div>
                <h3> Logged Workouts</h3>
                <table className="table">
                   <thead className="table-light">
                      <tr>
                       <th>Username</th>
                       <th>Description</th>
                       <th>Duration</th>
                       <th>Date</th>
                       <th>Actions</th>
                      </tr>   
                   </thead>  
                   <tbody>
                       {this.workoutList()}
                   </tbody>
                </table>
            </div>
        )
    }
}
