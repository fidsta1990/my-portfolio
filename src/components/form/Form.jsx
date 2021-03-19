import React from "react";
import * as Styling from "./formStyle";

const Form = () => {
  return (
    <Styling.ContactForm name="contact" action="/contact" method="post">
      <Styling.FormGroup>
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control"
          required
        />
      </Styling.FormGroup>
      <Styling.FormGroup>
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control"
          required
        />
      </Styling.FormGroup>
      <Styling.FormGroup>
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="form-control"
        />
      </Styling.FormGroup>
      <Styling.FormGroup>
        <input type="hidden" name="form-name" value="contact" />
        <textarea
          name="message"
          cols="30"
          rows="6"
          placeholder="Message"
          className="form-control"
          required
        ></textarea>
      </Styling.FormGroup>
      <Styling.FormBtn type="submit" >
        SUBMIT
      </Styling.FormBtn>
    </Styling.ContactForm>
  );
};

export default Form;
