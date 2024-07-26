import React from 'react';
import './Contact.css'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Helmet } from 'react-helmet';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
        }
    };

    return (
        <>
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us</title>
                <link rel="canonical" href="https://www.whitehatians.in/contact-us" />
            </Helmet>
        </div>
            <div className='contact-sec'>
            <h2>CONTACT US<ContactPageIcon /></h2>
            <div className='contact-us'>
                <div className='contact-left'>
                    <h1>Get in touch</h1>
                    <h3>President:</h3>
                    <h4>Mail to: president@whitehatians.in</h4>
                    <h4>Phone to: +91 9xxxxxxxxx</h4>
                    <h3>Secretary:</h3>
                    <h4>Mail to: secretary@whitehatians.in</h4>
                    <h4>Phone to: +91 9xxxxxxxxx</h4>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <input className='name' type='text' placeholder='Enter your Name' name='name' required />
                    <input className='email' type='email' placeholder='Enter your Email' name='email' required />
                    <textarea className='text-area' name='message' rows="8" placeholder='Enter your Message' required />
                    <button className='submit' type='submit'>Submit</button>
                    <span>{result}</span>
                </form>
            </div>
        </div>
        </>
    );  
}

export default Contact;
