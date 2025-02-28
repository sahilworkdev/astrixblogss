import { useEffect, useRef } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  XIcon,
  PinterestIcon,
} from "react-share";
import Image from "next/image";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function ShareModal({ isOpen, onClose, url }: ShareModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shareButtons = [
    {
      name: "Facebook",
      Component: FacebookShareButton,
      icon: "/socials/facebook.svg",
      bgColor: "bg-blue-600",
    },
    {
      name: "Twitter",
      Component: TwitterShareButton,
      icon: null, // Using XIcon component directly
      bgColor: "bg-black",
    },
    {
      name: "LinkedIn",
      Component: LinkedinShareButton,
      icon: "/socials/linkedIn.svg",
      bgColor: "bg-blue-600",
    },
    {
      name: "Email",
      Component: EmailShareButton,
      icon: "/socials/mail.svg",
      bgColor: "bg-zinc-500",
    },
    {
      name: "Pinterest",
      Component: PinterestShareButton,
      icon: null, // Using PinterestIcon component directly
      bgColor: "bg-red-600",
    },
    {
      name: "WhatsApp",
      Component: WhatsappShareButton,
      icon: "/socials/whatsApp.svg",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-md p-6 w-full max-w-sm mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Share Post</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-2 justify-center items-center">
          {shareButtons.map(({ name, Component, icon, bgColor }) => (
            <div
              key={name}
              className={`${bgColor} rounded-md p-3 flex items-center justify-center cursor-pointer hover:opacity-90`}
            >
              <Component
                url={url}
                media={url}
                className="w-full h-full flex items-center justify-center"
              >
                {icon ? (
                  <Image
                    src={icon}
                    width={20}
                    height={20}
                    alt={`${name} icon`}
                  />
                ) : name === "Twitter" ? (
                  <XIcon size={20} />
                ) : name === "Pinterest" ? (
                  <PinterestIcon size={20} />
                ) : null}
              </Component>
            </div>
          ))}
        </div>

        {/* Copy Link Button */}
        <div className="mt-4">
          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              onClose();
            }}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Copy Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
