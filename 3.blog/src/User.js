import {useState} from "react";

//Functional Component

// function User(){
//     return (
//         <h1>User Component</h1>
//     )
// }

// export default User;






//Class Component
// import React,{Component} from 'react';
// export default class User extends Component
// {
//     render(){
//         return(
//             <h1>Hello from User</h1>
//         )
//     }
// }




function User(){
    let [data,setData] = useState("kartik");

    function updateData(){
        setData("bitla");
    }
    console.warn("--------");

    return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}>Click Me</button>    
        </div>
    )
}

export default User;

