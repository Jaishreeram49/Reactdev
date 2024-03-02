import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}. Here is the message: ${data.msg}`);
  };

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div> 
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Full Name" autoComplete="name"/>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name='phone' value={data.phone} onChange={InputEvent} placeholder="Mobile No" autoComplete="tel"/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" autoComplete="email"/>
              </div>
              <div className="mb-3">
                <label htmlFor="msg" className="form-label">Message</label>
                <textarea className="form-control" id="msg" rows="3" name='msg' value={data.msg} onChange={InputEvent} autoComplete="off"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
