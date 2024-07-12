import "./Socials.css";

import whatsappIcon from "../assets/whatsapp.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";

interface QuoteProps {
  quote: string;
  author: string;
}

// https://wa.me/?text=[your-encoded-message]
// https://twitter.com/intent/tweet?text=[your-encoded-message]
// https://www.linkedin.com/shareArticle?mini=true&text=[message]

const Socials = ({ quote, author }: QuoteProps) => {
  const text = `${quote}\n${author}`;

  const socialLinks = [
    {
      name: "Whatsapp",
      href: `https://wa.me/?text=${encodeURIComponent(text)}`,
      icon: whatsappIcon,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&text=${encodeURIComponent(
        text
      )}`,
      icon: linkedinIcon,
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      icon: twitterIcon,
    },
  ];

  return (
    <ul className="socials" data-html2canvas-ignore>
      {socialLinks.map((social) => (
        <li key={social.name} className="icon-content">
          <a
            className="link"
            href={social.href}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} alt={social.name} />
          </a>
          <div className="tooltip">{social.name}</div>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
