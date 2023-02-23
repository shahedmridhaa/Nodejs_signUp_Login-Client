import React from 'react';
import { toast } from 'react-hot-toast';
import "./style.css"


const Form = () => {


    const handleSignIn =(e)=>{
        e.preventDefault()
        const userName = e.target.name.value
        const email = e.target.email.value
        const password = e.target.pswd.value

		const user = {
			userName : userName,
			email:email ,
			password:password
		}
		fetch('http://localhost:4000/signUp',{
			method: "POST",
			headers: {
			 'content-type': "application/json"
			},
			body: JSON.stringify(user) 
	   })
	   .then(res => res.json())
	   .then(data => {
		if(data){
			e.target.reset()
			toast.success("SuccessFully SignUp")
		}
	   })
    
      }




   const handleLogin =(e)=>{
     e.preventDefault()
     const email = e.target.email.value
     const password = e.target.pswd.value

	 const loginUser = {
		email:email,
		password: password
	 }

	 fetch('http://localhost:4000/login',{
		method: "POST",
		headers: {
		 'content-type': "application/json"
		},
		body: JSON.stringify(loginUser) 
   })
   .then(data => {
	console.log(data.status);
	if(data.status === 200){
        toast.success("successfully Login")
		e.target.reset()
	}
   })

   }


    return (
        <div>
            <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form onSubmit={handleSignIn}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="name" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button type='submit'  className=" btn-primary">Sign up</button>
				</form>
			</div>

			<div className="login">

				<form onSubmit={handleLogin}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button type="submit" className=" btn-primary">Login</button>
				</form>
			</div>
	</div>
        </div>
    );
};

export default Form;