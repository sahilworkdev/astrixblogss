import Image from "next/image";
import Link from "next/link";

const FOOTER_SOCIAL_LINKS = [
  {
    iconSrc: "/icons/twitter.svg",
    href: "https://x.com/astrix_live",
    alt: "Facebook",
  },
  {
    iconSrc: "/icons/instagram.svg",
    href: "https://www.instagram.com/astrix.live/",
    alt: "Twitter",
  },
  {
    iconSrc: "/icons/linkedIn.svg",
    href: "https://www.linkedin.com/company/astrix-live/",
    alt: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="p-2 mobile:p-8 w-full mt-36 mobile:mt-52">
      <div className=" flex flex-col justify-between bg-[#d6fdb4] rounded-xl p-4 mobile:p-8">
        <div className="flex flex-col items-start mobile:items-center gap-4 mobile:gap-6 mb-6 mobile:mb-12">
          <div>
            <Image
              src={"/newlogo.svg"}
              width={120}
              height={40}
              alt="astrix logo"
            />
          </div>
          <div className="mobile:text-center flex flex-col gap-2">
            <h2 className="text-[22px] leading-[22px] mobile:text-[76px] tablet:text-[96px] font-nohemi mobile:leading-[76px] tablet:leading-[96px] text-grey">
              Get in Touch
            </h2>
            <p className="font-nohemi text-[16px] mobile:text-xl tablet:text-[22px] leading-[20px] mobile:leading-[22px]">
              Say Hello at &nbsp;
              <span className="text-green-150 underline">
                hello@astrix.live
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col tablet:flex-row justify-between items-start mobile:items-center w-full text-xs mobile:text-lg tablet:text-[22px] leading-[22px] font-nohemi">
          <Link href="/terms" className="leading-[22px] font-nohemi">
            Terms & Conditions
          </Link>
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-4">
              {FOOTER_SOCIAL_LINKS.map((social, index) => (
                <Link href={social.href} key={index} target="_blank">
                  <Image
                    src={social.iconSrc}
                    width={20}
                    height={20}
                    alt={social.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
