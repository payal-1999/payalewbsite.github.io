import React, { useState } from "react";
const Contact = () => {
const[data,setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    message:""
})
const formSubmit=()=>{

}
const inputEvent=(event)=>{
const {name,value}=event.target;
setData((preval)=>{
return{
    ...preval,
    [name]:value,
}
})
}


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  className="form-control"
                  placeholder="enter your name"
                />
              </div>
              <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  
                className="form-control"
                placeholder="enter your phone number"
              />
            </div>
           
            <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
                  value={data.email}
                  onChange={inputEvent}
                  
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
         
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
