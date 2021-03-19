import React from "react";
import * as Styling from "./contactStyles";
import contactInfo from "./contactDetails";
import { Underline } from "../../components/Underline";
import Form from "../../components/form/Form";
import { social } from "../../components/main-navbar/details";

const Contact = () => {
  return (
    <Styling.ContactWrapper id="contact">
      <Styling.ContactContain>
        <Styling.ContactTitle>
          <h4>Contact</h4>
          <h2>Get In Touch.</h2>
          <h4>Looking forward to having a chat.</h4>
          <Underline />
        </Styling.ContactTitle>
        <Styling.ContactContext>
          <Form />
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
            <Styling.SocialWrap>
              {social.map((item) => {
                const { id, url, icon } = item;
                return (
                  <Styling.Social key={id} href={url} target="_blank">
                    {icon}
                  </Styling.Social>
                );
              })}
            </Styling.SocialWrap>
          </Styling.ContactDetails>
        </Styling.ContactContext>
      </Styling.ContactContain>
    </Styling.ContactWrapper>
  );
};

export default Contact;
