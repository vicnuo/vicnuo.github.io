import '../css/ContactMe.css';
import { useState } from 'react';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSend, setIsSend] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);
    setIsSend(true);

  };

  const handleClose = () => {
    setIsSend(false);
          // 清空表单字段
  setFormData({
    name: '',
    email: '',
    message: ''
  });
  };

  return (
    <div className="contact_form_container">
      <h2 className="contact_form_header">Get in Touch</h2>
      {isSend ? (
        <div className='thanksText'>
          Thanks for reaching out to me, <span className='formData_name'>{formData.name}</span>
          <button className="close_button" onClick={handleClose}> Close </button> 
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="contact_form_row">
            <label htmlFor="name" className="contact_form_label">Name:</label>
            <input 
              className="contact_form_input"
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <span className="required_asterisk">*</span>
          </div>
          <div className="contact_form_row">
            <label htmlFor="email" className="contact_form_label">Email:</label>
            <input 
              className="contact_form_input"
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <span className="required_asterisk">*</span>
          </div>
          <div className="contact_form_row">
            <label htmlFor="message" className="contact_form_label">Message:</label>
            <textarea 
              className="contact_form_textarea"
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="contact_form_button">Submit</button>
        </form>
      )}
    </div>
  );
  
}

export default ContactMe;
