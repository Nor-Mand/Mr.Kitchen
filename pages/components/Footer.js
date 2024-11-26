import React from "react";
import Link from "next/link";
import Image from "next/image";
import isotipo from "../images/isotipo.png";
import style from "../../styles/Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const links = [
  {
    id: 1,
    name: "Github",
    icon: <FaGithub />,
    url: "https://github.com/Nor-Mand",
  },
  {
    id: 2,
    name: "Linkeding",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/normand-terceros-laredo-923271169",
  },
  // {
  //   id: 3,
  //   name: "Instagram",
  //   icon: <FaInstagram />,
  //   url: "https://www.instagram.com/normand_creative",
  // },
];

const year = new Date()

const Footer = () => {
  return (
    <>
      <div className={`container-fluid bg-dark ${style.footer}`}>
        <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-2 my-4 border-top">
          <Link
            href="/"
            className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <div className="bg-dark p-3 rounded col-md-4 ">
              <Image
                src={isotipo}
                width={40}
                height={40}
                alt="Mr. Kitchen Isotipo"
              />
            </div>
          </Link>
          <p className="col-md-4 mb-0 text-muted text-center">
            ©{year.getFullYear()} &nbsp; <Link href="https://normand.dev/"> Normand Dev</Link>
          </p>
          <ul className="nav col-md-4 justify-content-end">
            {links.map(({ id, name, url, icon }, i) => (
              <li key={i} className="nav-item">
                <Link href={url}>
                  <a name={name} className="nav-link px-4 text-muted ">
                    {icon}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
