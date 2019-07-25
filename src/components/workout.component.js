import React from 'react';
import {Link} from "react-router-dom";

const Workout =  props  => (
        <tr>
            <td>{props.workout.username}</td>
            <td>{props.workout.description}</td>
            <td>{props.workout.duration}</td>
            <td>{props.workout.date.substring(0,10)}</td>
            <td>
               <Link to={"/edit/"+ props.workout._id}>edit </Link>   | <button type="button" className="btn btn-link" onClick={() =>{props.deleteWorkout(props.workout._id)}}> delete </button>
            </td>
        </tr>   
    )


export default Workout;