import React from "react";
import * as Styling from "./contactStyles";
import contactInfo from "./contactDetails";
import {Underline} from '../../components/Underline'

const Contact = () => {
  return (
    <Styling.ContactWrapper id="contact">
      <Styling.ContactContain>
        <Styling.ContactTitle>
          <h4>Contact</h4>
          <h2>Get In Touch.</h2>
          <h4>Looking forward to having a chat.</h4>
          <Underline/>
        </Styling.ContactTitle>
        <Styling.ContactContext>
          <Styling.ContactDetails>
            {contactInfo.map((item, idx) => {
              const { icon, name, text } = item;
              return (
                <div key={idx} className="details">
                  <h4>{name}</h4>
                  <p>
                    <span>{icon}</span> {text}
                  </p>
                </div>
              );
            })}
            <div className="social">
              
            </div>
          </Styling.ContactDetails>
        </Styling.ContactContext>
      </Styling.ContactContain>
    </Styling.ContactWrapper>
  );
};

export default Contact;
