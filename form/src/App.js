import React, { useState } from 'react';
import "./App.css"


const App = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    dob:'',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    message: '',
  });
  function validatePassword(password) {
    
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    return pattern.test(password);
  }
  
// Validation for the Inputs
  const validate = () => {
    const errors = {};

    if (!state.name.trim()) {
     alert("Name is required")
    }

    else if (!state.email.trim()) {
      alert("email is required")
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = 'Email is invalid';
    }

    else if (!state.password.trim()) {
      alert("password is required")
    } else if (state.password.length < 8 || !validatePassword(state.password.trim())) {
      alert("Please enter valid Password");
    }
    else if(!state.dob)
    {
      alert("please enter DOB")
    }
    else if(!state.age)
    {
      alert("please enter age")
    }
    
    
    else if(state.age <=0)
    {
      alert("Enter proper age")
    }
    else if (!state.gender) {
      alert("gender is required")
    }

    else if (!state.address.trim()) {
      alert("address is required")
    }

    else if (!state.city.trim()) {
      alert("city is required")
    }

    else if (!state.state.trim()) {
      alert("state is required")
    }
   

    else if (!state.phone.trim()) {
      alert("phone number is required")
    } else if (!/^[0-9]+$/.test(state.phone)) {
      alert("phone number is not valid")
    }
    else if(!state.message)
    {
      alert("please enter some message")
    }
    
    else{
      return true;  
    }
    
  };
 
  // Function for the onChange event of the Input box
  const handleInput = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Function for the sumbit event
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const isValid = validate();
    if (isValid) {
      alert("Succesfully loged in")
      // Reseting the input boxes
      setState((prevState)=>({...prevState,name: '',
    email: '',
    password: '',
    dob:'',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    message: '',}))
    }
    
  };



  return (
    <div className='div'>
    <form className='form' onSubmit={handleSubmit}>
      {/* Input box for Name */}
      <label htmlFor="name">Name:</label>
      <input type="text" className="input-container" id="name" name="name" value={state.name} onChange={handleInput} />
       {/* Input box for Email */}
      <label htmlFor="email">Email:</label>
      <input type="email" className="input-container" id="email" name="email" value={state.email} onChange={handleInput} />
       {/* Input box for Password */}
      <label htmlFor="password">Password:</label>
      <input type="password" className="input-container" id="password" name="password" value={state.password} onChange={handleInput} />
      {/* Input box for Dob */}
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" className="input-container" name='dob'
       value={state.dob} onChange={handleInput}
       min="1900-01-01" max="2022-12-31"/>
      {/* Input box for Age */}
      <label htmlFor="age">Age:</label>
      <input type="number"className="input-container" id="age" name="age" value={state.age} onChange={handleInput} />
      {/* Input box for Gender */}
      <label htmlFor="gender">Gender:</label>
      <select id="gender" className="input-container"name="gender" value={state.gender} onChange={handleInput}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
        {/* Input box for Address */}
      <label htmlFor="address">Address:</label>
      <input type="text" className="input-container" id="address" name="address" value={state.address} onChange={handleInput} />
      {/* Input box for City */}
      <label htmlFor="city">City:</label>
      <input type="text" className="input-container"id="city" name="city" value={state.city} onChange={handleInput} />
        {/* Input box for State */}
      <label htmlFor="state">State:</label>
      <input type="text" className="input-container"id="state" name="state" value={state.state} onChange={handleInput} />

      {/* Input box for Phone number */}
      <label htmlFor="phone">Phone number:</label>
      <input type="tel" className="input-container"id="phone" name="phone" value={state.phone} onChange={handleInput} />
      {/* Input box for Resume */}
      <label htmlFor="file">Upload Resume</label>
      <input type='file'className="input-container" name="file" value={state.file} onChange={handleInput} ></input> 
      {/* Input box for Message */}
      <label htmlFor="message">Message:</label>
      <textarea id="message"className="input-container" name="message" value={state.message} onChange={handleInput} />
      {/* Input box for Submit */}
      <button className="button"type="submit">Submit</button>
    </form>
    </div>
  );
};

export default App;
