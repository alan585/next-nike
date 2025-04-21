import Image from "next/image";
import { footerLinks, socialMedia } from "@/constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start gap-6">
          <Image
            src="/assets/images/footer-logo.svg"
            alt="Nike Logo"
            width={150}
            height={46}
            className="m-0 h-[46px] w-[150px]"
          />
          <p className="font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5">
            {socialMedia.map((media) => (
              <div
                key={media.alt}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
              >
                <Image src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:brightness-50"
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start gap-2">
          <Image
            src="/assets/icons/copyright-sign.svg"
            alt="copyright sign"
            width={20}
            height={20}
          />
          <p className="font-montserrat text-white-400">
            {" "}
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="font-montserrat text-white-400">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
