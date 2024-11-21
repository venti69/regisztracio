import React from 'react';

const Register = () => {
    const feltolt = async (event) =>{
        event.preventDefault();
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        console.log("Email:",email, ". Jelszó:",password);
        const response = await fetch('http://localhost:3500/register', {
            method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email, password})
        })
        const valasz = await response.json()
        if(response.ok){
            window.alert(valasz.msg)
        }else{
            window.alert(valasz.msg)
        }
    }
    return(
        <div>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" id='email'/>
                <br />
                <label htmlFor="password">Jelszó: </label>
                <input type="password" id='password'/>
                <br />
                <button onClick={feltolt}>Feltölt</button>
            </form>
        </div>)
};

export default Register;
