import React from "react";

function Table(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <table class="table table-hover table-dark">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Exercise Type</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Sets</th>
                            <th scope="col">Reps</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Cycling</th>
                            <td>30</td>
                            <td>3</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">Push-Ups</th>
                            <td>33</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <th scope="row">Squats</th>
                            <td>35</td>
                            <td>5</td>
                            <td>10</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;