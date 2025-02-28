"use client";

import Image from "next/image";
import {
  // EmailIcon,
  EmailShareButton,
  // FacebookIcon,
  FacebookShareButton,
  // LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  //   TelegramIcon,
  //   TelegramShareButton,
  TwitterShareButton,
  // WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

export default function ShareIconsGrid() {
  const link = window.location.href;
  return (
    <div className="flex justify-center items-center sm:hidden w-full z-50 fixed bottom-0 left-0 right-0">
      <div className="bg-blue-600 h-10 w-16 p-2  flex items-center justify-center">
        <FacebookShareButton url={link}>
          <Image
            src={"/socials/facebook.svg"}
            width={20}
            height={20}
            alt="
        fb icon"
          />
        </FacebookShareButton>
      </div>

      <div className="bg-black h-10 w-16 p-2  flex items-center justify-center">
        <TwitterShareButton url={link}>
          <XIcon size={30} />
        </TwitterShareButton>
      </div>

      <div className="bg-blue-600 h-10 w-16 p-2  flex items-center justify-center">
        <LinkedinShareButton url={link}>
          <Image
            src={"/socials/linkedIn.svg"}
            width={20}
            height={20}
            alt="
        linkedin icon"
          />
        </LinkedinShareButton>
      </div>
      <div className="bg-zinc-500 h-10 w-16 p-2  flex items-center justify-center">
        <EmailShareButton url={link}>
          <Image
            src={"/socials/mail.svg"}
            width={20}
            height={20}
            alt="
        mail icon"
          />
        </EmailShareButton>
      </div>

      <div className="bg-red-600 h-10 w-16 p-2  flex items-center justify-center">
        <PinterestShareButton media="" url={link} className="h-6">
          <PinterestIcon size={30} />
        </PinterestShareButton>
      </div>

      {/* <TelegramShareButton url={link} className="h-6">
        <TelegramIcon />
      </TelegramShareButton> */}

      <div className="bg-green-500 h-10 w-16 p-2  flex items-center justify-center">
        <WhatsappShareButton url={link} className="h-6">
          <Image
            src={"/socials/whatsApp.svg"}
            width={20}
            height={20}
            alt="
        linkedin icon"
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
