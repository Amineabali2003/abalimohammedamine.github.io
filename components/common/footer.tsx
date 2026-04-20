import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Télécharger mon CV"
          otherProps={{
            download: "ABALI_Mohammed_Amine_Dev.pdf",
          }}
          href="/ABALI_Mohammed_Amine_Dev.pdf"
        />
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Contactez moi"
          href={`mailto:${EMAIL}`}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>

        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name={copied ? "✅ Email copié !" : "📋 Copier mon email"}
          href="/#contact"
          onClick={handleCopyEmail}
        />
      </div>
    </>
  );

  const { ref: footerRef } = MENULINKS[2];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
