import React from "react";
import { MailIcon, DeviceMobileIcon } from "@heroicons/react/solid";

function Contact() {
  return (
    <div>
      <div className="absolute top-20 left-[8vw] pr-8 flex flex-col">
        <h1 className="font-Magenda text-5xl font-extrabold md:text-6xl leading-[60px] mb-[60px] lg:text-8xl lg:max-w-2xl lg:leading-[110px]">
          Let's work on your project together
        </h1>
        <div className="flex items-center space-x-4">
          <MailIcon className="h-8 md:h-12" />
          <a
            className="font-Poppins font-bold text-xl md:text-2xl"
            href="mailto:developerisadia@gmail.com"
          >
            developerisadia@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4 my-[40px]">
          <DeviceMobileIcon className="h-8 md:h-12" />
          <a
            className="font-Poppins font-bold text-xl md:text-2xl"
            href="tel:+254796661363"
          >
            +254796661363
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <img src="/whatsapp.svg" alt="" className="h-[2rem] object-contain" />
          <p className="font-Poppins font-bold text-xl md:text-2xl">
            +254796661363
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
