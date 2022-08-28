import Content from "../components/Content";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqkjagvl");
  if (state.succeeded) {
      return <p>Thank you! Your message has been received.</p>;
  }
  return (
    <div className='mt-5' style={{ maxWidth: '600px' }}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
      className="input mb-3"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
        Message
      </label>
      <textarea
      className="textarea"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="button mt-5" type="submit" style={{ fontFamily: "EB Garamond" }} disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  )
}

const Contact = () => {
  return <Content title="Contact">
    <div className="is-size-4"></div>
    <ContactForm />
  </Content>
};

export default Contact;
