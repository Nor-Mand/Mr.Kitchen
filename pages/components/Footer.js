import React from "react";
import Link from "next/link";
import Image from "next/image";
import isotipo from "../images/isotipo.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid  ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">© 2022 Normand.dev</p>

          <Link
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <div className="bg-dark p-3 rounded">
              <Image
                src={isotipo}
                width={40}
                height={40}
                alt="Mr. Kitchen Isotipo"
              />
            </div>
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link px-2 text-muted">
                About
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
