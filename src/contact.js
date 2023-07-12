import React from 'react';
import './App.css';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
      <br/>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input type='text' id='name' required />
        </div> <br/>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div> <br/>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm