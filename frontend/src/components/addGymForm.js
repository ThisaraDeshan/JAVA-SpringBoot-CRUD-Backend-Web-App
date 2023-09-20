import React,{useState} from "react";
import axios from "./axios";

function AddGymForm(){

    const [exerciseType,setExerciseType] = useState("");
    const [weight,setWeight] = useState("");
    const [numberOfSets,setNumberOfSets] = useState("");
    const [numberOfReps,setNumberOfReps] = useState("");

    function saveData(e){
        e.preventDefault();
        const newGym ={
            exerciseType,
            weight,
            numberOfSets,
            numberOfReps
        }
        console.log(newGym);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={saveData}>
                        <div class="form-group">
                            <label className="mt-4" for="exercise Type">Exercise Type</label>
                            <select class="form-control" id="exerciseType" onChange={(event)=>{
                                setExerciseType(event.target.value);
                            }}>
                                <option value="Cycling">Cycling</option>
                                <option value="Push-Ups">Push-Ups</option>
                                <option value="Squats">Squats</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label className="mt-4" for="Trained-Weight">Trained Weight</label>
                            <input type="text" class="form-control" name="weight" id="weight" placeholder="weight" onChange={(event)=>{
                                setWeight(event.target.value);
                            }}/>
                        </div>
                        <div class="form-group">
                            <label className="mt-4" for="Number Of Sets">Number Of Sets</label>
                            <input type="text" class="form-control" name="numberOfSets" id="numberOfSets" placeholder="numberOfSets" onChange={(event)=>{
                                setNumberOfSets(event.target.value);
                            }}/>
                        </div>
                        <div class="form-group">
                            <label className="mt-4" for="Number Of Reps">Number Of Reps</label>
                            <input type="text" class="form-control" name="numberOfReps" id="numberOfReps" placeholder="numberOfReps" onChange={(event)=>{
                                setNumberOfReps(event.target.value);
                            }}/>
                        </div>
                        <button type="submit" class="btn btn-primary mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddGymForm;