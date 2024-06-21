import React from "react"

import GitIcon from "../icons/git";
import LinkedInIcon from "../icons/linkedin";
import WhatsappIcon from "../icons/whatsapp";
import Button from "../button";


import cv from "../../assets/CV Balyko.pdf"

const Contacts: React.FC = () => (

  <div className="w-72 text-right">
    <a href={cv} target="_blank">
      <Button className="mr-2">CV</Button>
    </a>
    <p className="mt-5">Email:</p>
    <p>angelpopichina@gmail.com</p>

    <div className="flex flex-row mt-2 float-right">
      <a href="https://github.com/Crwling" target="_blank">
        <GitIcon/>
      </a>
      <a className="ml-3 mr-3" href="https://www.linkedin.com/in/ivan-balyko/" target="_blank">
        <LinkedInIcon/>
      </a>
      <a href="https://wa.me/380683151312" target="_blank">
        <WhatsappIcon/>
      </a>
    </div>
  </div>
)

export default Contacts;
