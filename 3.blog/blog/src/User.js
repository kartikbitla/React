function User(){
    function apple(){
        alert("Function has been called");
    }

    return (
        <div>
            <button onClick={apple}>Click Me</button>    
        </div>
    )
}

export default User;