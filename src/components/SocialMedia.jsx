import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
        <BsTwitter size={32} />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/harshit374"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={32} />
      </a>
    </div>
    <div>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookF size={32} />
      </a>
    </div>
  </div>
);

export default SocialMedia;